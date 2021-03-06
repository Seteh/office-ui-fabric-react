import * as React from 'react';
import { Layer } from './Layer';

export interface ILayerProps extends React.HTMLProps<HTMLDivElement | Layer> {
  /** Callback for when the layer is mounted. */
  onLayerMounted?: () => void;

  /**
   * Callback for when the layer is mounted.
   */
  onLayerDidMount?: () => void;

  /**
   * Callback for when the layer is unmounted.
   */
  onLayerWillUnmount?: () => void;

  /**
   * The optional id property provided on a LayerHost that this Layer should render within. The LayerHost does
   * not need to be immediately available but once has been rendered, and if missing, we'll avoid trying
   * to render the Layer content until the host is available. If an id is not provided, we will render the Layer
   * content in a fixed position element rendered at the end of the document.
   */
  hostId?: string;
}
