window.STORED_OBJECTS = {
  TEST_RECTANGLE: {
    "type": "RECTANGLE",
    "name": "Test Rectangle (GitHub)",
    "width": 400,
    "height": 400,
    "fills": [{
      "type": "SOLID",
      "color": {
        "r": 0,
        "g": 1,
        "b": 0
      }
    }]
  },
  GENERIC_JOB_BOX: {
    "type": "FRAME",
    "name": "Generic Job Box",
    "width": 1800,
    "height": 2911,
    "layoutProperties": {
      "layoutMode": "VERTICAL",
      "layoutWrap": "NO_WRAP",
      "primaryAxisAlignItems": "MIN",
      "counterAxisAlignItems": "CENTER",
      "primaryAxisSizingMode": "AUTO",
      "counterAxisSizingMode": "AUTO"
    },
    "fills": [{
      "type": "SOLID",
      "visible": true,
      "opacity": 1,
      "blendMode": "NORMAL",
      "color": {
        "r": 1,
        "g": 1,
        "b": 1
      }
    }],
    "children": [
      {
        "type": "FRAME",
        "name": "Drop Box Header",
        "width": 1800,
        "height": 265,
        "layoutProperties": {
          "layoutMode": "HORIZONTAL",
          "layoutWrap": "NO_WRAP",
          "paddingLeft": 113,
          "paddingRight": 275,
          "paddingTop": 75,
          "paddingBottom": 75,
          "itemSpacing": 10,
          "primaryAxisAlignItems": "MIN",
          "counterAxisAlignItems": "CENTER"
        },
        "fills": [{
          "type": "SOLID",
          "color": {
            "r": 0.25,
            "g": 0.25,
            "b": 0.25
          }
        }],
        "children": [
          {
            "type": "TEXT",
            "name": "#JOBNAME",
            "characters": "OCT1 FAB FALL PROMO FD RICH PUSH",
            "fontSize": 48,
            "fills": [{
              "type": "SOLID",
              "color": {
                "r": 1,
                "g": 1,
                "b": 1
              }
            }]
          }
        ]
      }
    ]
  }
};