# Figma Stored Objects

This repository hosts object definitions for a Figma plugin. It provides a centralized location for storing and managing Figma object definitions that can be used across different plugins.

## Usage

To use these object definitions in your Figma plugin:

1. Add the following script tag to your plugin's HTML file:
```html
<script src="https://billykerz.github.io/figma-stored-objects/objects/stored-objects.js"></script>
```

2. Access the objects in your plugin code:
```javascript
const object = window.STORED_OBJECTS.TEST_RECTANGLE;
figma.createNodeFromObject(object);
```

## Adding New Objects

1. Clone the repository
2. Add your new object definition to `/objects/stored-objects.js`
3. Follow the existing format:
```javascript
window.STORED_OBJECTS = {
  YOUR_OBJECT_NAME: {
    "type": "YOUR_TYPE",
    // ... object properties
  }
};
```
4. Create a pull request with your changes

## Development

To contribute to this repository:

```bash
# Clone the repository
git clone https://github.com/billykerz/figma-stored-objects.git

# Navigate to the project directory
cd figma-stored-objects

# Make your changes

# Commit and push your changes
git add .
git commit -m "Your commit message"
git push origin main
```