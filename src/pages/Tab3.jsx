import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonNote, IonPage, IonRow, IonTitle, IonToolbar, useIonToast } from '@ionic/react';
import './Tab3.css';
import { useState } from 'react';

import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import QRCode from 'react-qr-code';
import { addQRCode } from '../store/QRStore';
import { reloadOutline } from 'ionicons/icons';

const Tab3 = () => {

  const [ QRData, setQRData ] = useState(false);

  const start = async () => {

    const data = await BarcodeScanner.scan();
    setQRData(data);
  }

  const [ showToast ] = useIonToast();

  const handleAdd = async () => {

      addQRCode(QRData.text, true);
      showToast({

        header: "Success!",
        message: "QR Code stored successfully.",
        duration: 3000,
        color: "primary"
      });

      setQRData(false);
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
          { !QRData &&
            <IonRow>
              <IonCol size="12">
                <IonButton expand="block" onClick={ start }>Scan &rarr;</IonButton>
              </IonCol>
            </IonRow>
          }

          { QRData && 
            <>
              <IonRow className="ion-justify-content-center ion-text-center animate__animated animate__lightSpeedInLeft animate__faster">
                <IonCol size="12">
                  <QRCode value={ QRData.text } />
                </IonCol>
              </IonRow>

              <IonRow>
                <IonCol size="12">
                  <IonCard>
                    <IonCardHeader>
                      <IonCardTitle>QR Code data</IonCardTitle>
                      <IonNote>This is what the code represents</IonNote>
                    </IonCardHeader>
                    <IonCardContent>
                      <p>{ QRData.text }</p>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>

              <IonRow>
                <IonCol size="6">
                  <IonButton expand="block" fill="outline" onClick={ start }>
                    <IonIcon icon={ reloadOutline } />&nbsp;
                    Scan again</IonButton>
                </IonCol>
                <IonCol size="6">
                  <IonButton expand="block" onClick={ handleAdd }>Store &rarr;</IonButton>
                </IonCol>
              </IonRow>
            </>
          }
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
