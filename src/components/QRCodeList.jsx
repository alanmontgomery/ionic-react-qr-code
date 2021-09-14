import { IonItem, IonLabel, IonList, IonThumbnail, useIonModal } from "@ionic/react";
import { useState } from "react";
import { QRCodeModal } from "./QRCodeModal";

import useSound from 'use-sound';
import openSound from "../sounds/open.wav";

export const QRCodeList = ({ codes, pageRef }) => {

  const [ selectedCode, setSelectedCode ] = useState(false);
  const [ play ] = useSound(openSound);

  const [ present, dismiss ] = useIonModal(QRCodeModal, {

    dismiss: () => dismiss(),
    code: selectedCode
  });

  const handleSelect = code => {

    setSelectedCode(code);
    play();
    present({

      presentingElement: pageRef.current,
      swipeToClose: true,
      test: "hello"
    });
  }

  return (

    <IonList>
      { codes.map((code, index) => {

        return (

          <IonItem key={ index } detail={ true } onClick={ () => handleSelect(code) } button>
            <IonThumbnail>
              <img src="/assets/thumbnail.png" alt="thumbnail" />
            </IonThumbnail>
            <IonLabel className="ion-padding-start">
              <h1>{ code.data }</h1>
              <p>This was a { code.scanned ? "scanned" : "generated" } QR code</p>
            </IonLabel>
          </IonItem>
        );
      })}
    </IonList>
  );
};