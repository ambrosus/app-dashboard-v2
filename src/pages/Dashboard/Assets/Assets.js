/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { ReactSVG } from 'react-svg';

import Button from '../../../components/Button';
import borderOutlet from '../../../assets/svg/border_outer.svg';
import datePickerIcon from '../../../assets/svg/date-picker.svg';
import placePickerIcon from '../../../assets/svg/place-picker.svg';
import AssetItem from './components/AssetItem';
import MCreateAsset from '../../../components/Modal/modals/MCreateAsset/MCreateAsset';
import appStore from '../../../store/appStore';

const Assets = observer(() => {
  const [selectedPeriodBtn, setSelectedPeriodBtn] = useState('week');
  const setSelectedPeriodBtnHandler = (period) => {
    setSelectedPeriodBtn(period);
  };
  const packagingHandler = () => {
    console.log('Packaging');
  };
  const createAssetHandler = () => {
    console.log('Create Asset');
  };
  useEffect(async () => {
    await appStore.getStoreAssets();
  }, []);

  return (
    <div className="dashboard-container">
      <div className="assets-options">
        <div className="assets-options__title">My Assets</div>
        <div className="assets-options__buttons">
          <Button disabled type="secondary" onclick={packagingHandler}>
            <p>Packaging</p>
          </Button>
          <MCreateAsset>
            <Button type="primary" onclick={createAssetHandler}>
              <p>Create Asset</p>
            </Button>
          </MCreateAsset>
        </div>
      </div>
      <div className="assets-sorting">
        <div className="assets-sorting__selects">
          {true && (
            <>
              <div>Select all</div>
              <div>Unselect all</div>
            </>
          )}
        </div>
        <div className="assets-sorting__period-pick">
          <Button
            buttonStyles={{
              background: selectedPeriodBtn === 'day' ? '#9198BB' : '#F7F7FD',
              color: selectedPeriodBtn === 'day' ? 'white' : '#9198BB',
            }}
            type="secondary"
            onclick={() => setSelectedPeriodBtnHandler('day')}
          >
            <p>Day</p>
          </Button>
          <Button
            buttonStyles={{
              background: selectedPeriodBtn === 'week' ? '#9198BB' : '#F7F7FD',
              color: selectedPeriodBtn === 'week' ? 'white' : '#9198BB',
            }}
            type="secondary"
            onclick={() => setSelectedPeriodBtnHandler('week')}
          >
            <p>Week</p>
          </Button>
          <Button
            buttonStyles={{
              background: selectedPeriodBtn === 'month' ? '#9198BB' : '#F7F7FD',
              color: selectedPeriodBtn === 'month' ? 'white' : '#9198BB',
            }}
            type="secondary"
            onclick={() => setSelectedPeriodBtnHandler('month')}
          >
            <p>Month</p>
          </Button>
          <Button
            buttonStyles={{
              background: selectedPeriodBtn === 'year' ? '#9198BB' : '#F7F7FD',
              color: selectedPeriodBtn === 'year' ? 'white' : '#9198BB',
            }}
            type="secondary"
            priority="icon-btn"
            onclick={() => setSelectedPeriodBtnHandler('year')}
          >
            <p>Year</p>
          </Button>
        </div>
        <div className="assets-sorting__advanced-sorting">
          <Button
            buttonStyles={{
              background: '#F7F7FD',
            }}
            type="secondary"
          >
            <ReactSVG src={borderOutlet} wrapper="span" />
          </Button>
          <Button
            buttonStyles={{
              background: '#F7F7FD',
            }}
            type="secondary"
          >
            <ReactSVG src={datePickerIcon} wrapper="span" />
          </Button>
          <Button
            buttonStyles={{
              background: '#F7F7FD',
            }}
            type="secondary"
          >
            <ReactSVG src={placePickerIcon} wrapper="span" />
          </Button>
        </div>
      </div>
      <div className="assets-list">
        {appStore.assets.length > 0 &&
          appStore.assets.map((asset, index) => {
            console.log('[ASSET]:', asset);
            return (
              <div key={index}>
                <AssetItem
                  name={asset.info.name}
                  address={asset.assetId}
                  timestamp={asset.content.idData.timestamp}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
});

export default Assets;
