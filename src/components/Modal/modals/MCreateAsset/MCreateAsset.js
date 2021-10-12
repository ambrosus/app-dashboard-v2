/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import * as PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { observer } from 'mobx-react-lite';
import { ReactSVG } from 'react-svg';

import Modal from '../../Modal';
import MHeader from '../components/MHeader/MHeader';
import Input from '../../../Input';
import { Select } from '../../../Select/Select';
import { SwitchToggle } from '../../../SwitchToggle/SwitchToggle';
import Textarea from '../../../Textarea/Textarea';
import FileInput from '../../../FileInput';
import appStore from '../../../../store/appStore';
import Properties from '../../../../pages/Dashboard/Assets/components/Properties';
import Identifiers from '../../../../pages/Dashboard/Assets/components/Identifiers';
import Groups from '../../../../pages/Dashboard/Assets/components/Groups';
import Button from '../../../../components/Button';
import { useData } from '../../../../context/DataContext';

import addIcon from '../../../../assets/svg/add_circle.svg';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const MCreateAsset = observer(({ children }) => {
  const { setValues, data } = useData();
  const [modalVisible, setModalVisible] = useState();
  const [asset, setAsset] = useState([]);
  const [tab, setTab] = useState('form');
  const [groupsToggle, setGroupsToggle] = useState(false);
  const { register, handleSubmit, control, unregister, setValue, watch } =
    useForm({
      assetName: data.assetName,
      assetType: data.assetType,
      accessLevel: data.accessLevel,
      description: data.description,
      assetImages: data.assetImages,
      coverImage: data.coverImage,
    });
  const onSubmit = (values) => {
    setValues(values);
    if (data) {
      alert(JSON.stringify(data, null, 4));
    }
  };
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
                  <div className="hr" />
                  <Controller
                    control={control}
                    render={({ field }) => <Properties register={register} />}
                  />
                  <div className="spacer-10" />
                  <div className="spacer-10" />
                  {groupsToggle && (
                    <div>
                      <Groups />
                    </div>
                  )}
                  <div className="spacer-15" />
                  <div className="spacer-10" />
                  <div
                    className="add-group-btn"
                    onClick={() => setGroupsToggle(!groupsToggle)}
                  >
                    <ReactSVG src={addIcon} wrapper="span" />
                    <p>Add group</p>
                  </div>
                  <div className="hr" />
                  <Identifiers />
                  <div className="hr" />
                  <div className="actions-btns">
                    <div className="actions-btns__cancel">
                      <Button
                        type="secondary"
                        onclick={() => setModalVisible(false)}
                      >
                        <p>Cancel</p>
                      </Button>
                    </div>
                    <div className="actions-btns__submit">
                      <Button buttonType="submit" type="primary">
                        <p> Create Asset</p>
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            ) : (
              <pre>{JSON.stringify(appStore.newAsset, null, 4)}</pre>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
});

MCreateAsset.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
export default MCreateAsset;
