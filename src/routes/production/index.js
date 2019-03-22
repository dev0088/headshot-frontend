import Production from '../../components/productions/Productions';
import ImageMapEditor from '../../components/imagemap/ImageMapEditor';


const productionRoutes = [
  {
    path: "/productions",
    // layout: TemplateTopbarOfComingSoon,
    component: Production,
    exact: true
  },
  {
    path: "/image-editor",
    // layout: TemplateNothing,
    component: ImageMapEditor,
    exact: true
  }
];

export default productionRoutes;