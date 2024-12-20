// Simple test function
window.inspectNode = function(node) {
  return {
    id: node.id,
    name: node.name,
    type: node.type
  };
};

window.formatInspectionResult = function(node) {
  return JSON.stringify(window.inspectNode(node), null, 2);
};

window.hasInstances = function(node) {
  return node.type === "INSTANCE";
};