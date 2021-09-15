import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonNote, IonPage, IonRow, IonTitle, IonToolbar, useIonToast } from "@ionic/react";
import QRCode from "react-qr-code";
import { addQRCode } from "../store/QRStore";

import useSound from 'use-sound';
import closeSound from "../sounds/close.wav";
import { reloadOutline } from "ionicons/icons";

export const QRCodeScannedModal = ({ dismiss, code, set, scan }) => {

  const [ play ] = useSound(closeSound);
  const [ showToast ] = useIonToast();

  const handleDismiss = () => {

    dismiss();
    play();
  }

  const handleScanAgain = () => {

    handleDismiss();

    setTimeout(() => {
      scan();
    }, 10);
  }

  const handleAdd = async () => {

    addQRCode((code.text ? code.text : code), true);
    showToast({

      header: "Success!",
      message: "QR Code stored successfully.",
      duration: 3000,
      color: "primary"
    });

    handleDismiss();
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
              <QRCode value={ code.text ? code.text : code } />
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
                  <p>{ code.text ? code.text : code }</p>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="6">
              <IonButton expand="block" fill="outline" onClick={ handleScanAgain }>
                <IonIcon icon={ reloadOutline } />&nbsp;
                Scan again</IonButton>
            </IonCol>
            <IonCol size="6">
              <IonButton expand="block" onClick={ handleAdd }>Store &rarr;</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}