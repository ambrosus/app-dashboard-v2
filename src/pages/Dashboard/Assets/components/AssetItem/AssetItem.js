import React, { useState } from 'react';
import classNames from 'classnames';
import { ReactSVG } from 'react-svg';
import * as PropTypes from 'prop-types';
import moment from 'moment-timezone';
import ReactTooltip from 'react-tooltip';

import addIcon from '../../../../../assets/svg/add-icon.svg';
import removeCircleIcon from '../../../../../assets/svg/remove-circle.svg';
import copyIcon from '../../../../../assets/svg/copy-icon.svg';
import useCopyToClipboard from '../../../../../utils/useCopyToClipboard';

function AssetItem({ name, timestamp, address }) {
  const [selectedAsset, setSelectedAsset] = useState(false);
  const {
    text: copiedText,
    isCopied,
    onCopy,
  } = useCopyToClipboard({ text: address }, 1000);
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
        <div className="assets-list__item--body--title">{name}</div>
        <div className="assets-list__item--body--info">
          <div className="sum-blocks">
            <div className="info-events-count">
              <p>1434 Events</p>
            </div>
            <div className="info-asset-address">
              Asset address &nbsp;&nbsp;
              <p className="text-secondary">{address.substring(21, 0)}...</p>
              &nbsp;&nbsp;
              <ReactSVG
                style={{ zIndex: 99, cursor: 'pointer' }}
                data-tip
                data-for={`copy-state${address}`}
                onClick={onCopy}
                src={copyIcon}
                wrapper="span"
              />
              {isCopied && copiedText === address && (
                <div>
                  <ReactTooltip
                    id={`copy-state${address}`}
                    place="top"
                    effect="solid"
                  >
                    Copied
                  </ReactTooltip>
                </div>
              )}
            </div>
          </div>
          <div className="assets-list__item--body--info__created-at">
            <p>{moment(timestamp * 1000).format('D MMM YYYY')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
AssetItem.propTypes = {
  name: PropTypes.string,
  timestamp: PropTypes.number,
  address: PropTypes.string,
};
export default AssetItem;
