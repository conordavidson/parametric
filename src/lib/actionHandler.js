import { Document, Layer } from 'sketch/dom';
import { DISTANCE } from './constants/constraintTypes';

export default context => {
  const document = context.actionContext.document;
  const data = document.documentData();
  const command = context.command;

  const selectedLayer = Document.fromNative(context.actionContext.document).selectedLayers.map(layer => layer)[0];
  const positions = command.valueForKey_onDocument('positions', data);
  const constraints = command.valueForKey_onDocument('constraints', data);

  // If positions are recorded for the selected layers and it has moved in the x
  // or y direction...
  if (
    (
      positions[selectedLayer.id] &&
      positions[selectedLayer.id].x &&
      positions[selectedLayer.id].x !== selectedLayer.frame.x
    ) || (
      positions[selectedLayer.id] &&
      positions[selectedLayer.id].y &&
      positions[selectedLayer.id].y !== selectedLayer.frame.y
    )
  ) {

    // If constraints exist for the selected layer
    if (constraints[selectedLayer.id]) {
      const layerConstraints = constraints[selectedLayer.id];

      const layerConstraint = Object.keys(layerConstraints)
      .map(constraintId => layerConstraints[constraintId])
      .find(constraint => {
        return constraint.type.toString() == DISTANCE;
      })

      const layerConstrainedToId = layerConstraint.definition.from;

      const xPosition = selectedLayer.frame.x;
      const updatedLayerPosition = xPosition + 10;


      // Reposition layer
      const layerToMove = Document.fromNative(context.actionContext.document).getLayerWithID(layerConstrainedToId);


      if (layerToMove) {
        layerToMove.frame.x = updatedLayerPosition;

        const updatedPositions = {
          ...positions,
          [selectedLayer.id]: {
            x: selectedLayer.frame.x,
            y: selectedLayer.frame.y
          },
          [layerToMove]: {
            x: layerToMove.frame.x,
            y: layerToMove.frame.y
          },
        };

        command.setValue_forKey_onDocument(updatedPositions, 'positions', data);

      }
    }
  }
}
