import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonNote, IonPage, IonRow, IonTitle, IonToolbar, useIonToast } from "@ionic/react";
import QRCode from "react-qr-code";
import { removeQRCode } from "../store/QRStore";

import useSound from 'use-sound';
import closeSound from "../sounds/close.wav";

export const QRCodeModal = ({ dismiss, code }) => {

  const [ play ] = useSound(closeSound);

  const [ showToast ] = useIonToast();

  const handleRemove = () => {

    removeQRCode(code.id);

    showToast({

      header: "Success!",
      message: "QR Code removed successfully.",
      duration: 3000,
      color: "primary"
    });

    dismiss();
    play();
  }

  const handleDismiss = () => {

    dismiss();
    play();
  }

  return (

    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>View QR Code</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={ handleDismiss }>Close</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonGrid className="ion-padding-top ion-margin-top">
          <IonRow className="ion-justify-content-center ion-text-center animate__animated animate__lightSpeedInLeft animate__faster">
            <IonCol size="12">
              <QRCode value={ code.data } />
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
                  <p>{ code.data }</p>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="12">
              <IonButton expand="block" onClick={ handleRemove }>Remove &rarr;</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}