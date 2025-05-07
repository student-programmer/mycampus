import style from "@/fsd/widgets/profile/ui/profile.module.scss";
import React, { useEffect, useRef } from "react";
import { Button } from "antd";

import Image from 'next/image';
import { User } from "@/fsd/entities/profile";

interface DetailProps {
  currentProfile: User;
  setPhotoUrl: (url: string | null) => void;
  setUploadImage: (file: File | null) => void;
  photoUrl: string | null;
}


export const UploadPhoto = ({ setPhotoUrl, setUploadImage, currentProfile, photoUrl }: DetailProps) => {
  const filePicker = useRef<HTMLInputElement | null>(null);
  const fileReader = new FileReader();

  const noAv = '/noAV.png';

  useEffect(() => {
    setPhotoUrl(currentProfile.photo || noAv);
  }, [currentProfile])


  fileReader.onloadend = () => {
    const result = fileReader.result;
    if (typeof result === 'string') {
      setPhotoUrl(result);
    }
  };


  const handlerDeleteImage = () => {
    setPhotoUrl(noAv);
    setUploadImage(null);
  };

  const isIncorrectType = (file: File): boolean => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    return allowedFileTypes.indexOf(file.type) === -1;
  };


  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUploadImage(null);
    event.preventDefault();

    const file = event.target.files?.[0];
    if (!file) return;

    const isIncorrect = isIncorrectType(file);

    if (isIncorrect) {
      const type = file.type || 'Незнакомый тип';
      window.alert('Недопустимый тип файла: ' + type);
      return;
    } else {
      const size = file.size;
      if (size > 5120000) {
        console.error("Размер файла не должен превышать 5 МБ!");
        return;
      }
    }

    setUploadImage(file);
    fileReader.readAsDataURL(file);
  };


  const handlePick = () => {
    if (filePicker.current && "click" in filePicker.current) {
      filePicker.current.click();
    }
  };


  return (
    <div className={ style.photoContainer }>
      <div className={ style.photo }>
        <Image
          src={ photoUrl || noAv }
          alt=""
          width={ 120 }
          height={ 120 }
        />
      </div>
      <div className={ style.uploadButtons }>
        <Button
          className={ style.buttonSendProfile }
          onClick={ handlePick }>
          Upload image
        </Button>
        <input
          type="file"
          ref={ filePicker }
          className={ style.element }
          onChange={ handleOnChange }
        />
        { photoUrl !== noAv && (
          <Button
            className={ style.buttonLogOut }
            onClick={ handlerDeleteImage }>
            Delete image
          </Button>
        ) }
      </div>
    </div>

  )
}
