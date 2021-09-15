import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { IonContent, IonGrid, IonHeader, IonPage, IonTitle, IonToolbar, useIonModal } from '@ionic/react';
import { useStoreState } from 'pullstate';
import { useState } from 'react';
import { useRef } from 'react';
import useSound from 'use-sound';
import { CustomFab } from '../components/CustomFab';
import { NoQRCodes } from '../components/NoQRCodes';
import { QRCodeList } from '../components/QRCodeList';
import { QRCodeScannedModal } from '../components/QRCodeScannedModal';
import { QRStore } from '../store';
import { getCodes } from '../store/Selectors';
import './Tab1.css';

import openSound from "../sounds/open.wav";

const Tab1 = () => {

  const pageRef = useRef();
  const codes = useStoreState(QRStore, getCodes);
  const [ play ] = useSound(openSound);

  const [ QRData, setQRData ] = useState(false);

  const start = async () => {

    const data = await BarcodeScanner.scan();
    setQRData(data);
    
    play();
    present({

      presentingElement: pageRef.current
    });
  }

  const [ present, dismiss ] = useIonModal(QRCodeScannedModal, {

    dismiss: () => dismiss(),
    code: QRData,
    set: () => setQRData(),
    scan: () => start()
  });

  return (
    <IonPage ref={ pageRef }>
      <IonHeader>
        <IonToolbar>
          <IonTitle>QR Codes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">QR Codes</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          { codes.length < 1 && <NoQRCodes /> }
          { codes.length > 0 && <QRCodeList codes={ codes } pageRef={ pageRef } /> }
        </IonGrid>
        <CustomFab start={ start } />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
