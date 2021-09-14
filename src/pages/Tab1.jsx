import { IonContent, IonGrid, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useStoreState } from 'pullstate';
import { useRef } from 'react';
import { CustomFab } from '../components/CustomFab';
import { NoQRCodes } from '../components/NoQRCodes';
import { QRCodeList } from '../components/QRCodeList';
import { QRStore } from '../store';
import { getCodes } from '../store/Selectors';
import './Tab1.css';

const Tab1 = () => {

  const pageRef = useRef();
  const codes = useStoreState(QRStore, getCodes);

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
        <CustomFab />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
