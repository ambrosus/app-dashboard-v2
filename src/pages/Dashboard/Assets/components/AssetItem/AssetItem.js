import React, { useState } from 'react';
import classNames from 'classnames';
import { ReactSVG } from 'react-svg';

import addIcon from '../../../../../assets/svg/add-icon.svg';
import removeCircleIcon from '../../../../../assets/svg/remove-circle.svg';
import copyIcon from '../../../../../assets/svg/copy-icon.svg';

function AssetItem() {
  const [selectedAsset, setSelectedAsset] = useState(false);
  const setSelectedAssetHandler = () => {
    setSelectedAsset(!selectedAsset);
  };

  return (
    <div
      className={classNames('assets-list__item', {
        'selected-asset-active': selectedAsset,
      })}
      role="presentation"
      onClick={setSelectedAssetHandler}
    >
      {!selectedAsset ? (
        <div className={classNames('hover-add-btn')}>
          <ReactSVG src={addIcon} wrapper="span" />
        </div>
      ) : (
        <div className={classNames('remove-asset-select-btn')}>
          <ReactSVG src={removeCircleIcon} wrapper="span" />
        </div>
      )}
      <div className="assets-list__item--image"></div>
      <div className="assets-list__item--body">
        <div className="assets-list__item--body--title">
          A#12 Ready-to-eat meals and rations meals
        </div>
        <div className="assets-list__item--body--info">
          <div className="sum-blocks">
            <div className="info-events-count">
              <p>1434 Events</p>
            </div>
            <div className="info-asset-address">
              Asset address &nbsp;&nbsp;
              <p className="text-secondary">0xf0eb6d1e4fts2245562...</p>
              &nbsp;&nbsp;
              <ReactSVG src={copyIcon} wrapper="span" />
            </div>
          </div>
          <div className="assets-list__item--body--info__created-at">
            <p>11 Aug 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AssetItem;
