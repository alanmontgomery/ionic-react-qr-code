import { IonCol, IonRow, IonText } from "@ionic/react";

export const NoQRCodes = () => (

	<IonRow className="ion-text-center ion-justify-content-center">
    <IonCol size="9">
      <h3>It looks like you don't have any QR codes stored.</h3>
      <img src="/assets/icon2.png" alt="icon" />

      <p>Click the <IonText color="primary">button</IonText> in the bottom right to scan a code or generate a code.</p>
    </IonCol>
  </IonRow>
);