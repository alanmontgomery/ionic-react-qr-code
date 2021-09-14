import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import './Tab3.css';

import QrReader from "react-qr-scanner";
import { useState } from 'react';

const Tab3 = () => {

  const [ QRData, setQRData ] = useState(false);
  const [ scanning, setScanning ] = useState(false);
  const previewStyle = {
    
    height: 240,
    width: 320,
  }

  const start = () => {

    setScanning(true);
  }

  const handleScan = data => {

    setQRData(data);
    setScanning(false);
  }

  const handleError = err => {

    console.log(err);
    setScanning(false);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="QR Codes" />
          </IonButtons>
          <IonTitle>Scan QR Code</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Scan QR Code</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonGrid>
          <IonRow>
            <IonCol size="12">
              <IonButton expand="block" onClick={ start }>Scan &rarr;</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>

       { scanning && 
          <QrReader
            delay={ 100 }
            style={ previewStyle }
            onError={ handleError }
            onScan={ handleScan }
          />
        }
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
