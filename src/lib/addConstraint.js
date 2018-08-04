import { Document, Layer } from 'sketch/dom';
import { DISTANCE } from './constants/constraintTypes';
import uuid from 'uuid/v4';

export default context => {
  const data = context.document.documentData();
  const command = context.command;

  const selectedLayers = Document.fromNative(context.document).selectedLayers.map(layer => layer);

  const constraints = command.valueForKey_onDocument('constraints', data);
  const constraintId = uuid();

  const updatedConstraints = {
    ...constraints,
    [selectedLayers[0].id]: {
      [constraintId]: {
        type: DISTANCE,
        definition: {
          distance: 10,
          from: selectedLayers[1].id
        }
      }
    },
    [selectedLayers[1].id]: {
      [constraintId]: {
        type: DISTANCE,
        definition: {
          distance: 10,
          from: selectedLayers[0].id
        }
      }
    }
  }

  const positions = command.valueForKey_onDocument('positions', data);
  const layer1x = selectedLayers[0].frame.x;
  const layer2x = layer1x - 10;
  selectedLayers[1].frame.x = layer2x;

  const updatedPositions = {
    ...positions,
    [selectedLayers[0].id]: {
      x: selectedLayers[0].frame.x,
      y: selectedLayers[0].frame.y
    },
    [selectedLayers[1].id]: {
      x: selectedLayers[1].frame.x,
      y: selectedLayers[1].frame.y
    },
  };

  command.setValue_forKey_onDocument(updatedConstraints, 'constraints', data);
  command.setValue_forKey_onDocument(updatedPositions, 'positions', data);
  context.document.showMessage(updatedConstraints)

  console.log(updatedPositions, updatedConstraints)
}



/*

Constraint data structure:

{
  layerId: {
    constraintId: {
      type: CONSTRAINT_TYPE,
      definition: {
        distance: '10px',
        from: layerId
      }
    }
  }
}

*/
