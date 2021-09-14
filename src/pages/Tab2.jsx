import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonNote, IonPage, IonRow, IonTextarea, IonTitle, IonToolbar, useIonToast } from '@ionic/react';
import './Tab2.css';

import QRCode from "react-qr-code";
import { useState } from 'react';
import { addQRCode } from '../store/QRStore';

const Tab2 = () => {

  const [ data, setData ] = useState("");
  const [ showToast ] = useIonToast();

  const handleAdd = async () => {

    if (data === "") {

      showToast({

        header: "Error!",
        message: "Please enter some data to store.",
        duration: 3000,
        color: "danger"
      });
    } else {

      addQRCode(data);
      showToast({

        header: "Success!",
        message: "QR Code stored successfully.",
        duration: 3000,
        color: "primary"
      });

      setData("");
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="QR Codes" />
          </IonButtons>
          <IonTitle>Generate QR Code</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Generate QR Code</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonGrid>

          <IonRow>
            <IonCol size="12">
              <IonItem lines="none">
                <IonLabel className="ion-text-wrap">
                  <h1>You can generate a QR code to store or share with friends.</h1>
                  <p>You'll see a live preview of the QR Code</p>
                </IonLabel>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="12">
              <IonItem>
                <IonLabel position="stacked">Data to store</IonLabel>
                <IonTextarea rows="3" placeholder="Enter a URL or secret information" type="text" inputmode="text" value={ data } onIonChange={ e => setData(e.target.value) } />
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow className="ion-text-center ion-margin-top">
            <IonCol size="12">
              { data !== "" ? <QRCode value={ data } /> : <img src="/assets/placeholder2.png" alt="placeholder qr" height="256" /> }
            </IonCol>
          </IonRow>

          <IonRow className="ion-text-center ion-justify-content-center">
            <IonCol size="10">
              <IonItem lines="none">
                <IonLabel className="ion-text-wrap ion-text-center">
                  <p>When you're ready, you can store the generated QR Code</p>
                </IonLabel>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="12">
              <IonButton expand="block" onClick={ handleAdd }>Store &rarr;</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
