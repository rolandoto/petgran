import { Liste } from "../Component/List_Foto/ListPhoto";
import { withPhtos } from "../Hoc/WithPhotos";



//withPhtos es una props  quien lo recibe es liste
export const ListoComponent = withPhtos(Liste)
