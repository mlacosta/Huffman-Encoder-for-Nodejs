import { createEncoder } from '../src/createEncoder';
import { dataset2 } from '../__mocks__/dataset2';

describe('encoder', () => {
  it('createEncoder', async () => {
    expect(createEncoder(dataset2)).toMatchInlineSnapshot(`
      HNode {
        "props": Object {
          "freq": 2387,
          "left": HNode {
            "props": Object {
              "freq": 965,
              "left": HNode {
                "props": Object {
                  "freq": 424,
                  "left": HNode {
                    "props": Object {
                      "freq": 200,
                      "left": HNode {
                        "props": Object {
                          "freq": 97,
                          "left": null,
                          "right": null,
                          "symbol": "d",
                        },
                      },
                      "right": HNode {
                        "props": Object {
                          "freq": 103,
                          "left": HNode {
                            "props": Object {
                              "freq": 50,
                              "left": null,
                              "right": null,
                              "symbol": "m",
                            },
                          },
                          "right": HNode {
                            "props": Object {
                              "freq": 53,
                              "left": HNode {
                                "props": Object {
                                  "freq": 23,
                                  "left": null,
                                  "right": null,
                                  "symbol": "k",
                                },
                              },
                              "right": HNode {
                                "props": Object {
                                  "freq": 30,
                                  "left": null,
                                  "right": null,
                                  "symbol": "b",
                                },
                              },
                              "symbol": "kb",
                            },
                          },
                          "symbol": "mkb",
                        },
                      },
                      "symbol": "dmkb",
                    },
                  },
                  "right": HNode {
                    "props": Object {
                      "freq": 224,
                      "left": null,
                      "right": null,
                      "symbol": "t",
                    },
                  },
                  "symbol": "dmkbt",
                },
              },
              "right": HNode {
                "props": Object {
                  "freq": 541,
                  "left": HNode {
                    "props": Object {
                      "freq": 267,
                      "left": HNode {
                        "props": Object {
                          "freq": 125,
                          "left": HNode {
                            "props": Object {
                              "freq": 57,
                              "left": null,
                              "right": null,
                              "symbol": "u",
                            },
                          },
                          "right": HNode {
                            "props": Object {
                              "freq": 68,
                              "left": null,
                              "right": null,
                              "symbol": "c",
                            },
                          },
                          "symbol": "uc",
                        },
                      },
                      "right": HNode {
                        "props": Object {
                          "freq": 142,
                          "left": null,
                          "right": null,
                          "symbol": "h",
                        },
                      },
                      "symbol": "uch",
                    },
                  },
                  "right": HNode {
                    "props": Object {
                      "freq": 274,
                      "left": null,
                      "right": null,
                      "symbol": "e",
                    },
                  },
                  "symbol": "uche",
                },
              },
              "symbol": "dmkbtuche",
            },
          },
          "right": HNode {
            "props": Object {
              "freq": 1422,
              "left": HNode {
                "props": Object {
                  "freq": 659,
                  "left": HNode {
                    "props": Object {
                      "freq": 308,
                      "left": HNode {
                        "props": Object {
                          "freq": 153,
                          "left": HNode {
                            "props": Object {
                              "freq": 70,
                              "left": HNode {
                                "props": Object {
                                  "freq": 33,
                                  "left": HNode {
                                    "props": Object {
                                      "freq": 16,
                                      "left": null,
                                      "right": null,
                                      "symbol": "v",
                                    },
                                  },
                                  "right": HNode {
                                    "props": Object {
                                      "freq": 17,
                                      "left": HNode {
                                        "props": Object {
                                          "freq": 7,
                                          "left": null,
                                          "right": null,
                                          "symbol": "j",
                                        },
                                      },
                                      "right": HNode {
                                        "props": Object {
                                          "freq": 10,
                                          "left": HNode {
                                            "props": Object {
                                              "freq": 4,
                                              "left": null,
                                              "right": null,
                                              "symbol": "z",
                                            },
                                          },
                                          "right": HNode {
                                            "props": Object {
                                              "freq": 6,
                                              "left": HNode {
                                                "props": Object {
                                                  "freq": 3,
                                                  "left": null,
                                                  "right": null,
                                                  "symbol": "x",
                                                },
                                              },
                                              "right": HNode {
                                                "props": Object {
                                                  "freq": 3,
                                                  "left": HNode {
                                                    "props": Object {
                                                      "freq": 1,
                                                      "left": null,
                                                      "right": null,
                                                      "symbol": "=",
                                                    },
                                                  },
                                                  "right": HNode {
                                                    "props": Object {
                                                      "freq": 2,
                                                      "left": null,
                                                      "right": null,
                                                      "symbol": "q",
                                                    },
                                                  },
                                                  "symbol": "=q",
                                                },
                                              },
                                              "symbol": "x=q",
                                            },
                                          },
                                          "symbol": "zx=q",
                                        },
                                      },
                                      "symbol": "jzx=q",
                                    },
                                  },
                                  "symbol": "vjzx=q",
                                },
                              },
                              "right": HNode {
                                "props": Object {
                                  "freq": 37,
                                  "left": null,
                                  "right": null,
                                  "symbol": "y",
                                },
                              },
                              "symbol": "vjzx=qy",
                            },
                          },
                          "right": HNode {
                            "props": Object {
                              "freq": 83,
                              "left": HNode {
                                "props": Object {
                                  "freq": 40,
                                  "left": null,
                                  "right": null,
                                  "symbol": "g",
                                },
                              },
                              "right": HNode {
                                "props": Object {
                                  "freq": 43,
                                  "left": null,
                                  "right": null,
                                  "symbol": "f",
                                },
                              },
                              "symbol": "gf",
                            },
                          },
                          "symbol": "vjzx=qygf",
                        },
                      },
                      "right": HNode {
                        "props": Object {
                          "freq": 155,
                          "left": null,
                          "right": null,
                          "symbol": "r",
                        },
                      },
                      "symbol": "vjzx=qygfr",
                    },
                  },
                  "right": HNode {
                    "props": Object {
                      "freq": 351,
                      "left": HNode {
                        "props": Object {
                          "freq": 172,
                          "left": null,
                          "right": null,
                          "symbol": "i",
                        },
                      },
                      "right": HNode {
                        "props": Object {
                          "freq": 179,
                          "left": null,
                          "right": null,
                          "symbol": "n",
                        },
                      },
                      "symbol": "in",
                    },
                  },
                  "symbol": "vjzx=qygfrin",
                },
              },
              "right": HNode {
                "props": Object {
                  "freq": 763,
                  "left": HNode {
                    "props": Object {
                      "freq": 371,
                      "left": HNode {
                        "props": Object {
                          "freq": 180,
                          "left": null,
                          "right": null,
                          "symbol": "s",
                        },
                      },
                      "right": HNode {
                        "props": Object {
                          "freq": 191,
                          "left": HNode {
                            "props": Object {
                              "freq": 95,
                              "left": null,
                              "right": null,
                              "symbol": "l",
                            },
                          },
                          "right": HNode {
                            "props": Object {
                              "freq": 96,
                              "left": HNode {
                                "props": Object {
                                  "freq": 47,
                                  "left": null,
                                  "right": null,
                                  "symbol": "w",
                                },
                              },
                              "right": HNode {
                                "props": Object {
                                  "freq": 49,
                                  "left": null,
                                  "right": null,
                                  "symbol": "p",
                                },
                              },
                              "symbol": "wp",
                            },
                          },
                          "symbol": "lwp",
                        },
                      },
                      "symbol": "slwp",
                    },
                  },
                  "right": HNode {
                    "props": Object {
                      "freq": 392,
                      "left": HNode {
                        "props": Object {
                          "freq": 195,
                          "left": null,
                          "right": null,
                          "symbol": "o",
                        },
                      },
                      "right": HNode {
                        "props": Object {
                          "freq": 197,
                          "left": null,
                          "right": null,
                          "symbol": "a",
                        },
                      },
                      "symbol": "oa",
                    },
                  },
                  "symbol": "slwpoa",
                },
              },
              "symbol": "vjzx=qygfrinslwpoa",
            },
          },
          "symbol": "dmkbtuchevjzx=qygfrinslwpoa",
        },
      }
    `);
  });
});
