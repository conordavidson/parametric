import actionHandler from './lib/actionHandler';

export const handleSelectionChangedBegin = context => {
  // actionHandler(context.actionContext.document);
  // context.actionContext.document.showMessage("Selection Begin");
};

export const handleSelectionChangedFinish = context => {
  actionHandler(context);
  // context.actionContext.document.showMessage("Selection Finish");
};

export const handleLayersMoved = context => {
  actionHandler(context);
  // context.actionContext.document.showMessage("Layers Moved");
};

export const handleTextChanged = context => {
  // actionHandler(context.actionContext.document);
  // context.actionContext.document.showMessage("Text Changed");
};

export const handleScale = context => {
  // actionHandler(context.actionContext.document);
  // context.actionContext.document.showMessage("Scale");
};

export const handleEdit = context => {
  // actionHandler(context.actionContext.document);
  // context.actionContext.document.showMessage("Edit");
};
