/*eslint-disable*/
import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import SVGIcon from '../Input/SVGicon';
import { ReactSVG } from 'react-svg';
import removeIcon from '../../assets/svg/delete_circle.svg';
import selectIcon from '../../assets/svg/selectIcon.svg';
import Checkbox from '../Checkbox';
const FileInput = ({
  name,
  label,
  mode = 'update',
  register,
  unregister,
  setValue,
  watch,
  accept,
}) => {
  const files = watch(name);
  const [checkedOne, setCheckedOne] = useState(false);
  const [checkedOneImgIdx, setCheckedOneImgIdx] = useState(100);
  const updateOne = () => setCheckedOne(!checkedOne);
  const onDrop = useCallback(
    (droppedFiles) => {
      let newFiles =
        mode === 'update' ? droppedFiles : [...(files || []), ...droppedFiles];
      if (mode === 'append') {
        newFiles = newFiles.reduce((prev, file) => {
          const fo = Object.entries(file);
          if (
            prev.find((e) => {
              const eo = Object.entries(e);
              return eo.every(
                ([key, value], index) =>
                  key === fo[index][0] && value === fo[index][1],
              );
            })
          ) {
            return prev;
          } else {
            return [...prev, file];
          }
        }, []);
      }
      setValue(name, newFiles, { shouldValidate: true });
    },
    [setValue, name, mode, files],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
  });
  useEffect(() => {
    if (files && files.length > 0) {
      register(name);
    }
    return () => {
      unregister(name);
    };
  }, [register, unregister, name]);

  return (
    <div className="file-input">
      <div className="label">{label}</div>
      <div className={isDragActive ? 'bg-gray-400' : 'bg-gray-200'}>
        <div className="drop-zone">
          <div {...getRootProps()} className="input">
            <button className="add-image">
              <input
                name={name}
                label={label}
                mode={mode}
                accept
                id={name}
                {...getInputProps()}
              />{' '}
              <SVGIcon name="add" fill="rgb(55, 53, 214)" />{' '}
              <span>&nbsp;&nbsp;Upload image </span>
            </button>
          </div>
          <Checkbox
            name="a"
            label="Checkbox"
            checked={checkedOne}
            onChange={updateOne}
            disabled={!files}
          />
          {!!files?.length && (
            <div className="flex-file-container">
              {files.map((file, index) => {
                return (
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    key={file.name}
                    className={'flex-file-item'}
                  >
                    <div className="flex-file-item__delete">
                      <ReactSVG
                        onClick={(e) => {
                          e.stopPropagation();
                          const newFiles = [...files];
                          newFiles.reduceRight((_, n, i, a) => {
                            return n.name === file.name && a.splice(i, 1);
                          }, null);
                          newFiles.log;
                          setValue(name, newFiles, { shouldValidate: true });
                        }}
                        src={removeIcon}
                        wrapper="span"
                      />
                    </div>

                    {checkedOne && index === checkedOneImgIdx && (
                      <ReactSVG
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                        className="flex-file-item__checked"
                        src={selectIcon}
                        wrapper="span"
                      />
                    )}
                    <img
                      onClick={(e) => {
                        e.stopPropagation();
                        updateOne();
                        setCheckedOneImgIdx(index);
                        const newFiles = [...files];
                        newFiles.reduceRight((_, n, i, a) => {
                          return (
                            n.name !== file.name &&
                            a.splice(i, newFiles.length - 1)
                          );
                        }, null);
                        setValue('coverImage', newFiles, {
                          shouldValidate: true,
                        });
                      }}
                      src={URL.createObjectURL(file)}
                      alt={file.name}
                      style={{ width: '160px', height: '120px' }}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileInput;
