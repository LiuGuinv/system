define({ "api": [
  {
    "type": "get",
    "url": "/phones/SearchByKeyword/",
    "title": "SearchByKeyword",
    "name": "SearchByKeyword",
    "group": "Phone",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>关键字</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>Error code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Error message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/9phones.js",
    "groupTitle": "Phone"
  },
  {
    "type": "post",
    "url": "/phones/SearchByType/",
    "title": "SearchDataByType",
    "name": "SearchDataByType",
    "group": "Phone",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone_type",
            "description": "<p>手机系列</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>Error code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Error message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/9phones.js",
    "groupTitle": "Phone"
  },
  {
    "type": "post",
    "url": "/phones/deletephone/",
    "title": "deletetData",
    "name": "deletetData",
    "group": "Phone",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>手机id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>Error code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Error message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/9phones.js",
    "groupTitle": "Phone"
  },
  {
    "type": "post",
    "url": "/phones/editorphone/",
    "title": "editorphone",
    "name": "editorphone",
    "group": "Phone",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>商品id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone_name",
            "description": "<p>手机名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "img",
            "description": "<p>手机图片</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone_price",
            "description": "<p>手机价格</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone_type",
            "description": "<p>手机系列类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone_inventory",
            "description": "<p>手机库存</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>Error code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Error message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/9phones.js",
    "groupTitle": "Phone"
  },
  {
    "type": "post",
    "url": "/phones/phonelist/",
    "title": "find-phonelist",
    "name": "find_phonelist",
    "group": "Phone",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>Error code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Error message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/9phones.js",
    "groupTitle": "Phone"
  },
  {
    "type": "post",
    "url": "/phones/getPhoneById/",
    "title": "getPhoneById",
    "name": "getPhoneById",
    "group": "Phone",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>商品id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>Error code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Error message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/9phones.js",
    "groupTitle": "Phone"
  },
  {
    "type": "post",
    "url": "/phones/addphone/",
    "title": "insertData",
    "name": "insertData",
    "group": "Phone",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone_name",
            "description": "<p>手机名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "img",
            "description": "<p>手机图片</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone_price",
            "description": "<p>手机价格</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone_type",
            "description": "<p>手机系列类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone_inventory",
            "description": "<p>手机库存</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>Error code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Error message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/9phones.js",
    "groupTitle": "Phone"
  },
  {
    "type": "post",
    "url": "/user/login/",
    "title": "login",
    "name": "Login",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "usname",
            "description": "<p>username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uspass",
            "description": "<p>userpassword</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>emailcode</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>Error code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Error message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/2user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/getcode/",
    "title": "getcode",
    "name": "getcode",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>useremail</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>Error code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Error message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/2user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/upload/img/",
    "title": "upload",
    "name": "Uploadimg",
    "group": "upload",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "test",
            "description": "<p>monofile-formdata</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>Error code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Error message</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>The server path for the image</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n      err:0,\n\t\tmsg:'上传成功',\n\t\tpath:'img/1540902734665.jpeg'\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/7upload.js",
    "groupTitle": "upload"
  }
] });
