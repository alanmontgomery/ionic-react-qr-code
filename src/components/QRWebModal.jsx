import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import QrReader from "react-qr-reader";

export const QRWebModal = ({ dismiss, set, scan, error }) => {

  return (

    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Scan QR Code</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={ dismiss }>Close</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonGrid className="ion-padding-top ion-margin-top">
          <IonRow className="ion-justify-content-center ion-text-center animate__animated animate__lightSpeedInLeft animate__faster">
            <IonCol size="12">

              <QrReader
                  delay={ 500 }
                  onError={ error }
                  onScan={ scan }
                  style={{ width: "100%", height: "100%" }}
                />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}