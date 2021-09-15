import { IonFab, IonFabButton, IonFabList, IonIcon } from "@ionic/react";
import { addOutline, cameraOutline, qrCodeOutline } from "ionicons/icons";

export const CustomFab = ({ start }) => {

	return (

    <IonFab vertical="bottom" horizontal="end" slot="fixed" className="ion-padding-bottom ion-padding-end">
      <IonFabButton>
        <IonIcon icon={ qrCodeOutline } />
      </IonFabButton>

        <IonFabList side="top" className="ion-padding-bottom">
          <IonFabButton color="primary" onClick={ start }>
            <IonIcon icon={ cameraOutline } />
          </IonFabButton>

          <IonFabButton color="primary" routerLink="/manual">
            <IonIcon icon={ addOutline } />
          </IonFabButton>
        </IonFabList>
    </IonFab>
	);
}