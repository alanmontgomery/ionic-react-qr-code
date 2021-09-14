import { IonFab, IonFabButton, IonFabList, IonIcon, useIonRouter } from "@ionic/react";
import { addOutline, cameraOutline, qrCodeOutline } from "ionicons/icons";

export const CustomFab = () => {

  const router = useIonRouter();

  const handleFabClick = type => {

    router.push(type === "camera" ? "/tab2" : "/tab3", "forward");
  }

	return (

    <IonFab vertical="bottom" horizontal="end" slot="fixed" className="ion-padding-bottom ion-padding-end">
      <IonFabButton>
        <IonIcon icon={ qrCodeOutline } />
      </IonFabButton>

        <IonFabList side="top" className="ion-padding-bottom">
          <IonFabButton color="primary" routerLink="/camera">
            <IonIcon icon={ cameraOutline } />
          </IonFabButton>

          <IonFabButton color="primary" routerLink="/manual">
            <IonIcon icon={ addOutline } />
          </IonFabButton>
        </IonFabList>
    </IonFab>
	);
}