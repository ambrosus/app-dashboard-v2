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

const MCreateAsset = ({ children }) => {
  const [modalVisible, setModalVisible] = useState();
  const [asset, setAsset] = useState([]);
  const [tab, setTab] = useState('form');
  const { register, handleSubmit, control } = useForm();
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
                  <Input label="Name" register={register} required />
                  <div className="spacer" />
                  <div className="flex-row">
                    <div className="asset-type">
                      {' '}
                      <Select
                        label="Asset Type"
                        {...register('assetType')}
                        required
                      />
                    </div>
                    <div className="asset-switch">
                      {' '}
                      <Controller
                        control={control}
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

                  <input type="submit" />
                </form>
              </div>
            ) : (
              <div>{JSON.stringify(asset, 4, null)}</div>
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
