/*eslint-disable*/
import React, { useState } from 'react';
import * as PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { Controller } from 'react-hook-form';

import Modal from '../../Modal';
import MHeader from '../components/MHeader/MHeader';
import Input from '../../../Input';
import { Select } from '../../../Select/Select';
import { SwitchToggle } from '../../../SwitchToggle/SwitchToggle';
import Textarea from '../../../Textarea/Textarea';
import FileInput from '../../../FileInput';

const MCreateAsset = ({ children }) => {
  const [modalVisible, setModalVisible] = useState();
  const [asset, setAsset] = useState([]);
  const [tab, setTab] = useState('form');
  const { register, handleSubmit, control, unregister, setValue, watch } =
    useForm();

  const onSubmit = (data) => setAsset(data);
  return (
    <>
      <div role="presentation" onClick={() => setModalVisible(true)}>
        {children}
      </div>
      <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)}>
        <div className="m-new-asset">
          <MHeader title="New Asset" formOrJSON="form" setTabFunc={setTab} />
          <div className="m-new-asset__body">
            {tab === 'form' ? (
              <div>
                <div className="spacer" />
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                  <Input
                    name="assetName"
                    label="Name*"
                    placeholder="Asset name"
                    register={register}
                    required
                    type="text"
                  />
                  <div className="spacer" />
                  <div className="flex-row">
                    <div className="asset-type">
                      {' '}
                      <Controller
                        control={control}
                        defaultValue=""
                        name="assetType"
                        render={({ field }) => (
                          <Select
                            label="Asset Type*"
                            {...register('assetType')}
                            required
                          />
                        )}
                      />
                    </div>
                    <div className="asset-switch">
                      {' '}
                      <Controller
                        control={control}
                        defaultValue={false}
                        name="accessLevel"
                        render={({ field }) => (
                          <SwitchToggle
                            isOn={field.value}
                            onColor="#F7F7FD"
                            name="Access level"
                            handleToggle={(e) =>
                              field.onChange(e.target.checked)
                            }
                          />
                        )}
                      />
                    </div>
                  </div>
                  <div className="spacer" />
                  <Controller
                    control={control}
                    defaultValue=""
                    name="description"
                    render={({ field }) => (
                      <Textarea
                        placeholder="Asset description"
                        onchange={(e) => field.onChange(e.target.value)}
                      />
                    )}
                  />
                  <div className="hr" />
                  <div className="bundle-size">
                    Media bundle size{' '}
                    <span className="bundle-size__number">
                      &nbsp;4.2 Mb&nbsp;
                    </span>{' '}
                    used from{' '}
                    <span className="bundle-size__number">
                      &nbsp;16 Mb&nbsp;
                    </span>
                  </div>
                  <Controller
                    control={control}
                    render={({ field }) => (
                      <FileInput
                        accept="image/png, image/jpg, image/jpeg"
                        multiple
                        name="assetImages"
                        label="Asset Images"
                        mode="append"
                        register={register}
                        unregister={unregister}
                        setValue={setValue}
                        watch={watch}
                      />
                    )}
                  />
                  <input type="submit" />
                </form>
              </div>
            ) : (
              <pre>{JSON.stringify(asset, null, 4)}</pre>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};

MCreateAsset.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
export default MCreateAsset;
