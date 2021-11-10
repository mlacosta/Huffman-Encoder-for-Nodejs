import { createEncoder } from '../src/createEncoder';
import { dataset1 } from '../__mocks__/dataset';

describe('encoder', () => {
  it('createEncoder', async () => {
    expect(createEncoder(dataset1.trim())).toMatchInlineSnapshot(`
      HNode {
        "props": Object {
          "freq": 25538,
          "left": HNode {
            "props": Object {
              "freq": 25538,
              "left": HNode {
                "props": Object {
                  "freq": 10245,
                  "left": HNode {
                    "props": Object {
                      "freq": 4606,
                      "left": HNode {
                        "props": Object {
                          "freq": 2155,
                          "left": HNode {
                            "props": Object {
                              "freq": 1043,
                              "left": HNode {
                                "props": Object {
                                  "freq": 518,
                                  "left": null,
                                  "right": null,
                                  "symbol": "_",
                                },
                              },
                              "right": HNode {
                                "props": Object {
                                  "freq": 525,
                                  "left": null,
                                  "right": null,
                                  "symbol": "l",
                                },
                              },
                              "symbol": "_l",
                            },
                          },
                          "right": HNode {
                            "props": Object {
                              "freq": 1112,
                              "left": HNode {
                                "props": Object {
                                  "freq": 538,
                                  "left": HNode {
                                    "props": Object {
                                      "freq": 265,
                                      "left": HNode {
                                        "props": Object {
                                          "freq": 130,
                                          "left": HNode {
                                            "props": Object {
                                              "freq": 65,
                                              "left": HNode {
                                                "props": Object {
                                                  "freq": 30,
                                                  "left": HNode {
                                                    "props": Object {
                                                      "freq": 15,
                                                      "left": HNode {
                                                        "props": Object {
                                                          "freq": 7,
                                                          "left": null,
                                                          "right": null,
                                                          "symbol": "G",
                                                        },
                                                      },
                                                      "right": HNode {
                                                        "props": Object {
                                                          "freq": 8,
                                                          "left": HNode {
                                                            "props": Object {
                                                              "freq": 3,
                                                              "left": HNode {
                                                                "props": Object {
                                                                  "freq": 1,
                                                                  "left": null,
                                                                  "right": null,
                                                                  "symbol": "q",
                                                                },
                                                              },
                                                              "right": HNode {
                                                                "props": Object {
                                                                  "freq": 2,
                                                                  "left": null,
                                                                  "right": null,
                                                                  "symbol": "X",
                                                                },
                                                              },
                                                              "symbol": "qX",
                                                            },
                                                          },
                                                          "right": HNode {
                                                            "props": Object {
                                                              "freq": 5,
                                                              "left": HNode {
                                                                "props": Object {
                                                                  "freq": 2,
                                                                  "left": null,
                                                                  "right": null,
                                                                  "symbol": "Z",
                                                                },
                                                              },
                                                              "right": HNode {
                                                                "props": Object {
                                                                  "freq": 3,
                                                                  "left": null,
                                                                  "right": null,
                                                                  "symbol": "+",
                                                                },
                                                              },
                                                              "symbol": "Z+",
                                                            },
                                                          },
                                                          "symbol": "qXZ+",
                                                        },
                                                      },
                                                      "symbol": "GqXZ+",
                                                    },
                                                  },
                                                  "right": HNode {
                                                    "props": Object {
                                                      "freq": 15,
                                                      "left": null,
                                                      "right": null,
                                                      "symbol": "<",
                                                    },
                                                  },
                                                  "symbol": "GqXZ+<",
                                                },
                                              },
                                              "right": HNode {
                                                "props": Object {
                                                  "freq": 35,
                                                  "left": HNode {
                                                    "props": Object {
                                                      "freq": 16,
                                                      "left": null,
                                                      "right": null,
                                                      "symbol": ">",
                                                    },
                                                  },
                                                  "right": HNode {
                                                    "props": Object {
                                                      "freq": 19,
                                                      "left": null,
                                                      "right": null,
                                                      "symbol": "j",
                                                    },
                                                  },
                                                  "symbol": ">j",
                                                },
                                              },
                                              "symbol": "GqXZ+<>j",
                                            },
                                          },
                                          "right": HNode {
                                            "props": Object {
                                              "freq": 65,
                                              "left": null,
                                              "right": null,
                                              "symbol": "K",
                                            },
                                          },
                                          "symbol": "GqXZ+<>jK",
                                        },
                                      },
                                      "right": HNode {
                                        "props": Object {
                                          "freq": 135,
                                          "left": null,
                                          "right": null,
                                          "symbol": "]",
                                        },
                                      },
                                      "symbol": "GqXZ+<>jK]",
                                    },
                                  },
                                  "right": HNode {
                                    "props": Object {
                                      "freq": 273,
                                      "left": HNode {
                                        "props": Object {
                                          "freq": 135,
                                          "left": null,
                                          "right": null,
                                          "symbol": "[",
                                        },
                                      },
                                      "right": HNode {
                                        "props": Object {
                                          "freq": 138,
                                          "left": HNode {
                                            "props": Object {
                                              "freq": 66,
                                              "left": null,
                                              "right": null,
                                              "symbol": "Y",
                                            },
                                          },
                                          "right": HNode {
                                            "props": Object {
                                              "freq": 72,
                                              "left": null,
                                              "right": null,
                                              "symbol": "x",
                                            },
                                          },
                                          "symbol": "Yx",
                                        },
                                      },
                                      "symbol": "[Yx",
                                    },
                                  },
                                  "symbol": "GqXZ+<>jK][Yx",
                                },
                              },
                              "right": HNode {
                                "props": Object {
                                  "freq": 574,
                                  "left": HNode {
                                    "props": Object {
                                      "freq": 282,
                                      "left": HNode {
                                        "props": Object {
                                          "freq": 141,
                                          "left": null,
                                          "right": null,
                                          "symbol": "/",
                                        },
                                      },
                                      "right": HNode {
                                        "props": Object {
                                          "freq": 141,
                                          "left": null,
                                          "right": null,
                                          "symbol": "O",
                                        },
                                      },
                                      "symbol": "/O",
                                    },
                                  },
                                  "right": HNode {
                                    "props": Object {
                                      "freq": 292,
                                      "left": null,
                                      "right": null,
                                      "symbol": "f",
                                    },
                                  },
                                  "symbol": "/Of",
                                },
                              },
                              "symbol": "GqXZ+<>jK][Yx/Of",
                            },
                          },
                          "symbol": "_lGqXZ+<>jK][Yx/Of",
                        },
                      },
                      "right": HNode {
                        "props": Object {
                          "freq": 2451,
                          "left": HNode {
                            "props": Object {
                              "freq": 1196,
                              "left": HNode {
                                "props": Object {
                                  "freq": 590,
                                  "left": null,
                                  "right": null,
                                  "symbol": "i",
                                },
                              },
                              "right": HNode {
                                "props": Object {
                                  "freq": 606,
                                  "left": HNode {
                                    "props": Object {
                                      "freq": 298,
                                      "left": HNode {
                                        "props": Object {
                                          "freq": 149,
                                          "left": HNode {
                                            "props": Object {
                                              "freq": 74,
                                              "left": null,
                                              "right": null,
                                              "symbol": "2",
                                            },
                                          },
                                          "right": HNode {
                                            "props": Object {
                                              "freq": 75,
                                              "left": HNode {
                                                "props": Object {
                                                  "freq": 36,
                                                  "left": null,
                                                  "right": null,
                                                  "symbol": "8",
                                                },
                                              },
                                              "right": HNode {
                                                "props": Object {
                                                  "freq": 39,
                                                  "left": null,
                                                  "right": null,
                                                  "symbol": "A",
                                                },
                                              },
                                              "symbol": "8A",
                                            },
                                          },
                                          "symbol": "28A",
                                        },
                                      },
                                      "right": HNode {
                                        "props": Object {
                                          "freq": 149,
                                          "left": null,
                                          "right": null,
                                          "symbol": "F",
                                        },
                                      },
                                      "symbol": "28AF",
                                    },
                                  },
                                  "right": HNode {
                                    "props": Object {
                                      "freq": 308,
                                      "left": null,
                                      "right": null,
                                      "symbol": "g",
                                    },
                                  },
                                  "symbol": "28AFg",
                                },
                              },
                              "symbol": "i28AFg",
                            },
                          },
                          "right": HNode {
                            "props": Object {
                              "freq": 1255,
                              "left": HNode {
                                "props": Object {
                                  "freq": 610,
                                  "left": null,
                                  "right": null,
                                  "symbol": "n",
                                },
                              },
                              "right": HNode {
                                "props": Object {
                                  "freq": 645,
                                  "left": HNode {
                                    "props": Object {
                                      "freq": 322,
                                      "left": HNode {
                                        "props": Object {
                                          "freq": 160,
                                          "left": null,
                                          "right": null,
                                          "symbol": "-",
                                        },
                                      },
                                      "right": HNode {
                                        "props": Object {
                                          "freq": 162,
                                          "left": HNode {
                                            "props": Object {
                                              "freq": 80,
                                              "left": null,
                                              "right": null,
                                              "symbol": "1",
                                            },
                                          },
                                          "right": HNode {
                                            "props": Object {
                                              "freq": 82,
                                              "left": HNode {
                                                "props": Object {
                                                  "freq": 40,
                                                  "left": null,
                                                  "right": null,
                                                  "symbol": "3",
                                                },
                                              },
                                              "right": HNode {
                                                "props": Object {
                                                  "freq": 42,
                                                  "left": HNode {
                                                    "props": Object {
                                                      "freq": 21,
                                                      "left": null,
                                                      "right": null,
                                                      "symbol": "|",
                                                    },
                                                  },
                                                  "right": HNode {
                                                    "props": Object {
                                                      "freq": 21,
                                                      "left": null,
                                                      "right": null,
                                                      "symbol": "6",
                                                    },
                                                  },
                                                  "symbol": "|6",
                                                },
                                              },
                                              "symbol": "3|6",
                                            },
                                          },
                                          "symbol": "13|6",
                                        },
                                      },
                                      "symbol": "-13|6",
                                    },
                                  },
                                  "right": HNode {
                                    "props": Object {
                                      "freq": 323,
                                      "left": null,
                                      "right": null,
                                      "symbol": "S",
                                    },
                                  },
                                  "symbol": "-13|6S",
                                },
                              },
                              "symbol": "n-13|6S",
                            },
                          },
                          "symbol": "i28AFgn-13|6S",
                        },
                      },
                      "symbol": "_lGqXZ+<>jK][Yx/Ofi28AFgn-13|6S",
                    },
                  },
                  "right": HNode {
                    "props": Object {
                      "freq": 5639,
                      "left": HNode {
                        "props": Object {
                          "freq": 2733,
                          "left": HNode {
                            "props": Object {
                              "freq": 1346,
                              "left": HNode {
                                "props": Object {
                                  "freq": 662,
                                  "left": HNode {
                                    "props": Object {
                                      "freq": 330,
                                      "left": HNode {
                                        "props": Object {
                                          "freq": 165,
                                          "left": null,
                                          "right": null,
                                          "symbol": "I",
                                        },
                                      },
                                      "right": HNode {
                                        "props": Object {
                                          "freq": 165,
                                          "left": null,
                                          "right": null,
                                          "symbol": "k",
                                        },
                                      },
                                      "symbol": "Ik",
                                    },
                                  },
                                  "right": HNode {
                                    "props": Object {
                                      "freq": 332,
                                      "left": null,
                                      "right": null,
                                      "symbol": "d",
                                    },
                                  },
                                  "symbol": "Ikd",
                                },
                              },
                              "right": HNode {
                                "props": Object {
                                  "freq": 684,
                                  "left": HNode {
                                    "props": Object {
                                      "freq": 338,
                                      "left": HNode {
                                        "props": Object {
                                          "freq": 169,
                                          "left": HNode {
                                            "props": Object {
                                              "freq": 84,
                                              "left": null,
                                              "right": null,
                                              "symbol": "*",
                                            },
                                          },
                                          "right": HNode {
                                            "props": Object {
                                              "freq": 85,
                                              "left": HNode {
                                                "props": Object {
                                                  "freq": 42,
                                                  "left": HNode {
                                                    "props": Object {
                                                      "freq": 21,
                                                      "left": null,
                                                      "right": null,
                                                      "symbol": "	",
                                                    },
                                                  },
                                                  "right": HNode {
                                                    "props": Object {
                                                      "freq": 21,
                                                      "left": HNode {
                                                        "props": Object {
                                                          "freq": 10,
                                                          "left": null,
                                                          "right": null,
                                                          "symbol": "\\\\",
                                                        },
                                                      },
                                                      "right": HNode {
                                                        "props": Object {
                                                          "freq": 11,
                                                          "left": null,
                                                          "right": null,
                                                          "symbol": "^",
                                                        },
                                                      },
                                                      "symbol": "\\\\^",
                                                    },
                                                  },
                                                  "symbol": "	\\\\^",
                                                },
                                              },
                                              "right": HNode {
                                                "props": Object {
                                                  "freq": 43,
                                                  "left": null,
                                                  "right": null,
                                                  "symbol": "B",
                                                },
                                              },
                                              "symbol": "	\\\\^B",
                                            },
                                          },
                                          "symbol": "*	\\\\^B",
                                        },
                                      },
                                      "right": HNode {
                                        "props": Object {
                                          "freq": 169,
                                          "left": null,
                                          "right": null,
                                          "symbol": "E",
                                        },
                                      },
                                      "symbol": "*	\\\\^BE",
                                    },
                                  },
                                  "right": HNode {
                                    "props": Object {
                                      "freq": 346,
                                      "left": HNode {
                                        "props": Object {
                                          "freq": 173,
                                          "left": null,
                                          "right": null,
                                          "symbol": "M",
                                        },
                                      },
                                      "right": HNode {
                                        "props": Object {
                                          "freq": 173,
                                          "left": null,
                                          "right": null,
                                          "symbol": "=",
                                        },
                                      },
                                      "symbol": "M=",
                                    },
                                  },
                                  "symbol": "*	\\\\^BEM=",
                                },
                              },
                              "symbol": "Ikd*	\\\\^BEM=",
                            },
                          },
                          "right": HNode {
                            "props": Object {
                              "freq": 1387,
                              "left": HNode {
                                "props": Object {
                                  "freq": 684,
                                  "left": null,
                                  "right": null,
                                  "symbol": "o",
                                },
                              },
                              "right": HNode {
                                "props": Object {
                                  "freq": 703,
                                  "left": HNode {
                                    "props": Object {
                                      "freq": 351,
                                      "left": HNode {
                                        "props": Object {
                                          "freq": 175,
                                          "left": null,
                                          "right": null,
                                          "symbol": "L",
                                        },
                                      },
                                      "right": HNode {
                                        "props": Object {
                                          "freq": 176,
                                          "left": null,
                                          "right": null,
                                          "symbol": "h",
                                        },
                                      },
                                      "symbol": "Lh",
                                    },
                                  },
                                  "right": HNode {
                                    "props": Object {
                                      "freq": 352,
                                      "left": HNode {
                                        "props": Object {
                                          "freq": 176,
                                          "left": null,
                                          "right": null,
                                          "symbol": "y",
                                        },
                                      },
                                      "right": HNode {
                                        "props": Object {
                                          "freq": 176,
                                          "left": HNode {
                                            "props": Object {
                                              "freq": 87,
                                              "left": null,
                                              "right": null,
                                              "symbol": "H",
                                            },
                                          },
                                          "right": HNode {
                                            "props": Object {
                                              "freq": 89,
                                              "left": HNode {
                                                "props": Object {
                                                  "freq": 44,
                                                  "left": null,
                                                  "right": null,
                                                  "symbol": "$",
                                                },
                                              },
                                              "right": HNode {
                                                "props": Object {
                                                  "freq": 45,
                                                  "left": HNode {
                                                    "props": Object {
                                                      "freq": 22,
                                                      "left": null,
                                                      "right": null,
                                                      "symbol": ",",
                                                    },
                                                  },
                                                  "right": HNode {
                                                    "props": Object {
                                                      "freq": 23,
                                                      "left": null,
                                                      "right": null,
                                                      "symbol": "w",
                                                    },
                                                  },
                                                  "symbol": ",w",
                                                },
                                              },
                                              "symbol": "$,w",
                                            },
                                          },
                                          "symbol": "H$,w",
                                        },
                                      },
                                      "symbol": "yH$,w",
                                    },
                                  },
                                  "symbol": "LhyH$,w",
                                },
                              },
                              "symbol": "oLhyH$,w",
                            },
                          },
                          "symbol": "Ikd*	\\\\^BEM=oLhyH$,w",
                        },
                      },
                      "right": HNode {
                        "props": Object {
                          "freq": 2906,
                          "left": HNode {
                            "props": Object {
                              "freq": 1433,
                              "left": HNode {
                                "props": Object {
                                  "freq": 716,
                                  "left": HNode {
                                    "props": Object {
                                      "freq": 354,
                                      "left": null,
                                      "right": null,
                                      "symbol": "u",
                                    },
                                  },
                                  "right": HNode {
                                    "props": Object {
                                      "freq": 362,
                                      "left": null,
                                      "right": null,
                                      "symbol": ".",
                                    },
                                  },
                                  "symbol": "u.",
                                },
                              },
                              "right": HNode {
                                "props": Object {
                                  "freq": 717,
                                  "left": null,
                                  "right": null,
                                  "symbol": "s",
                                },
                              },
                              "symbol": "u.s",
                            },
                          },
                          "right": HNode {
                            "props": Object {
                              "freq": 1473,
                              "left": HNode {
                                "props": Object {
                                  "freq": 724,
                                  "left": null,
                                  "right": null,
                                  "symbol": "a",
                                },
                              },
                              "right": HNode {
                                "props": Object {
                                  "freq": 749,
                                  "left": null,
                                  "right": null,
                                  "symbol": "r",
                                },
                              },
                              "symbol": "ar",
                            },
                          },
                          "symbol": "u.sar",
                        },
                      },
                      "symbol": "Ikd*	\\\\^BEM=oLhyH$,wu.sar",
                    },
                  },
                  "symbol": "_lGqXZ+<>jK][Yx/Ofi28AFgn-13|6SIkd*	\\\\^BEM=oLhyH$,wu.sar",
                },
              },
              "right": HNode {
                "props": Object {
                  "freq": 15293,
                  "left": HNode {
                    "props": Object {
                      "freq": 6666,
                      "left": HNode {
                        "props": Object {
                          "freq": 3088,
                          "left": HNode {
                            "props": Object {
                              "freq": 1488,
                              "left": null,
                              "right": null,
                              "symbol": "e",
                            },
                          },
                          "right": HNode {
                            "props": Object {
                              "freq": 1600,
                              "left": HNode {
                                "props": Object {
                                  "freq": 756,
                                  "left": HNode {
                                    "props": Object {
                                      "freq": 370,
                                      "left": HNode {
                                        "props": Object {
                                          "freq": 182,
                                          "left": null,
                                          "right": null,
                                          "symbol": "v",
                                        },
                                      },
                                      "right": HNode {
                                        "props": Object {
                                          "freq": 188,
                                          "left": HNode {
                                            "props": Object {
                                              "freq": 91,
                                              "left": null,
                                              "right": null,
                                              "symbol": ":",
                                            },
                                          },
                                          "right": HNode {
                                            "props": Object {
                                              "freq": 97,
                                              "left": HNode {
                                                "props": Object {
                                                  "freq": 48,
                                                  "left": null,
                                                  "right": null,
                                                  "symbol": "%",
                                                },
                                              },
                                              "right": HNode {
                                                "props": Object {
                                                  "freq": 49,
                                                  "left": HNode {
                                                    "props": Object {
                                                      "freq": 24,
                                                      "left": null,
                                                      "right": null,
                                                      "symbol": "#",
                                                    },
                                                  },
                                                  "right": HNode {
                                                    "props": Object {
                                                      "freq": 25,
                                                      "left": null,
                                                      "right": null,
                                                      "symbol": "7",
                                                    },
                                                  },
                                                  "symbol": "#7",
                                                },
                                              },
                                              "symbol": "%#7",
                                            },
                                          },
                                          "symbol": ":%#7",
                                        },
                                      },
                                      "symbol": "v:%#7",
                                    },
                                  },
                                  "right": HNode {
                                    "props": Object {
                                      "freq": 386,
                                      "left": HNode {
                                        "props": Object {
                                          "freq": 189,
                                          "left": null,
                                          "right": null,
                                          "symbol": "U",
                                        },
                                      },
                                      "right": HNode {
                                        "props": Object {
                                          "freq": 197,
                                          "left": null,
                                          "right": null,
                                          "symbol": "b",
                                        },
                                      },
                                      "symbol": "Ub",
                                    },
                                  },
                                  "symbol": "v:%#7Ub",
                                },
                              },
                              "right": HNode {
                                "props": Object {
                                  "freq": 844,
                                  "left": HNode {
                                    "props": Object {
                                      "freq": 413,
                                      "left": null,
                                      "right": null,
                                      "symbol": "T",
                                    },
                                  },
                                  "right": HNode {
                                    "props": Object {
                                      "freq": 431,
                                      "left": HNode {
                                        "props": Object {
                                          "freq": 208,
                                          "left": HNode {
                                            "props": Object {
                                              "freq": 102,
                                              "left": HNode {
                                                "props": Object {
                                                  "freq": 50,
                                                  "left": HNode {
                                                    "props": Object {
                                                      "freq": 25,
                                                      "left": HNode {
                                                        "props": Object {
                                                          "freq": 12,
                                                          "left": null,
                                                          "right": null,
                                                          "symbol": "9",
                                                        },
                                                      },
                                                      "right": HNode {
                                                        "props": Object {
                                                          "freq": 13,
                                                          "left": HNode {
                                                            "props": Object {
                                                              "freq": 6,
                                                              "left": null,
                                                              "right": null,
                                                              "symbol": "@",
                                                            },
                                                          },
                                                          "right": HNode {
                                                            "props": Object {
                                                              "freq": 7,
                                                              "left": null,
                                                              "right": null,
                                                              "symbol": "W",
                                                            },
                                                          },
                                                          "symbol": "@W",
                                                        },
                                                      },
                                                      "symbol": "9@W",
                                                    },
                                                  },
                                                  "right": HNode {
                                                    "props": Object {
                                                      "freq": 25,
                                                      "left": null,
                                                      "right": null,
                                                      "symbol": "'",
                                                    },
                                                  },
                                                  "symbol": "9@W'",
                                                },
                                              },
                                              "right": HNode {
                                                "props": Object {
                                                  "freq": 52,
                                                  "left": null,
                                                  "right": null,
                                                  "symbol": "}",
                                                },
                                              },
                                              "symbol": "9@W'}",
                                            },
                                          },
                                          "right": HNode {
                                            "props": Object {
                                              "freq": 106,
                                              "left": HNode {
                                                "props": Object {
                                                  "freq": 53,
                                                  "left": null,
                                                  "right": null,
                                                  "symbol": "4",
                                                },
                                              },
                                              "right": HNode {
                                                "props": Object {
                                                  "freq": 53,
                                                  "left": null,
                                                  "right": null,
                                                  "symbol": "{",
                                                },
                                              },
                                              "symbol": "4{",
                                            },
                                          },
                                          "symbol": "9@W'}4{",
                                        },
                                      },
                                      "right": HNode {
                                        "props": Object {
                                          "freq": 223,
                                          "left": null,
                                          "right": null,
                                          "symbol": "N",
                                        },
                                      },
                                      "symbol": "9@W'}4{N",
                                    },
                                  },
                                  "symbol": "T9@W'}4{N",
                                },
                              },
                              "symbol": "v:%#7UbT9@W'}4{N",
                            },
                          },
                          "symbol": "ev:%#7UbT9@W'}4{N",
                        },
                      },
                      "right": HNode {
                        "props": Object {
                          "freq": 3578,
                          "left": HNode {
                            "props": Object {
                              "freq": 1762,
                              "left": HNode {
                                "props": Object {
                                  "freq": 866,
                                  "left": HNode {
                                    "props": Object {
                                      "freq": 432,
                                      "left": null,
                                      "right": null,
                                      "symbol": "c",
                                    },
                                  },
                                  "right": HNode {
                                    "props": Object {
                                      "freq": 434,
                                      "left": null,
                                      "right": null,
                                      "symbol": "m",
                                    },
                                  },
                                  "symbol": "cm",
                                },
                              },
                              "right": HNode {
                                "props": Object {
                                  "freq": 896,
                                  "left": null,
                                  "right": null,
                                  "symbol": "t",
                                },
                              },
                              "symbol": "cmt",
                            },
                          },
                          "right": HNode {
                            "props": Object {
                              "freq": 1816,
                              "left": HNode {
                                "props": Object {
                                  "freq": 906,
                                  "left": null,
                                  "right": null,
                                  "symbol": "
      ",
                                },
                              },
                              "right": HNode {
                                "props": Object {
                                  "freq": 910,
                                  "left": HNode {
                                    "props": Object {
                                      "freq": 447,
                                      "left": HNode {
                                        "props": Object {
                                          "freq": 223,
                                          "left": null,
                                          "right": null,
                                          "symbol": "P",
                                        },
                                      },
                                      "right": HNode {
                                        "props": Object {
                                          "freq": 224,
                                          "left": HNode {
                                            "props": Object {
                                              "freq": 110,
                                              "left": HNode {
                                                "props": Object {
                                                  "freq": 54,
                                                  "left": null,
                                                  "right": null,
                                                  "symbol": "C",
                                                },
                                              },
                                              "right": HNode {
                                                "props": Object {
                                                  "freq": 56,
                                                  "left": null,
                                                  "right": null,
                                                  "symbol": "\\"",
                                                },
                                              },
                                              "symbol": "C\\"",
                                            },
                                          },
                                          "right": HNode {
                                            "props": Object {
                                              "freq": 114,
                                              "left": HNode {
                                                "props": Object {
                                                  "freq": 56,
                                                  "left": HNode {
                                                    "props": Object {
                                                      "freq": 27,
                                                      "left": HNode {
                                                        "props": Object {
                                                          "freq": 13,
                                                          "left": null,
                                                          "right": null,
                                                          "symbol": "z",
                                                        },
                                                      },
                                                      "right": HNode {
                                                        "props": Object {
                                                          "freq": 14,
                                                          "left": null,
                                                          "right": null,
                                                          "symbol": ")",
                                                        },
                                                      },
                                                      "symbol": "z)",
                                                    },
                                                  },
                                                  "right": HNode {
                                                    "props": Object {
                                                      "freq": 29,
                                                      "left": null,
                                                      "right": null,
                                                      "symbol": "5",
                                                    },
                                                  },
                                                  "symbol": "z)5",
                                                },
                                              },
                                              "right": HNode {
                                                "props": Object {
                                                  "freq": 58,
                                                  "left": HNode {
                                                    "props": Object {
                                                      "freq": 29,
                                                      "left": null,
                                                      "right": null,
                                                      "symbol": "V",
                                                    },
                                                  },
                                                  "right": HNode {
                                                    "props": Object {
                                                      "freq": 29,
                                                      "left": HNode {
                                                        "props": Object {
                                                          "freq": 14,
                                                          "left": null,
                                                          "right": null,
                                                          "symbol": "(",
                                                        },
                                                      },
                                                      "right": HNode {
                                                        "props": Object {
                                                          "freq": 15,
                                                          "left": null,
                                                          "right": null,
                                                          "symbol": "?",
                                                        },
                                                      },
                                                      "symbol": "(?",
                                                    },
                                                  },
                                                  "symbol": "V(?",
                                                },
                                              },
                                              "symbol": "z)5V(?",
                                            },
                                          },
                                          "symbol": "C\\"z)5V(?",
                                        },
                                      },
                                      "symbol": "PC\\"z)5V(?",
                                    },
                                  },
                                  "right": HNode {
                                    "props": Object {
                                      "freq": 463,
                                      "left": HNode {
                                        "props": Object {
                                          "freq": 231,
                                          "left": HNode {
                                            "props": Object {
                                              "freq": 114,
                                              "left": null,
                                              "right": null,
                                              "symbol": "R",
                                            },
                                          },
                                          "right": HNode {
                                            "props": Object {
                                              "freq": 117,
                                              "left": null,
                                              "right": null,
                                              "symbol": "D",
                                            },
                                          },
                                          "symbol": "RD",
                                        },
                                      },
                                      "right": HNode {
                                        "props": Object {
                                          "freq": 232,
                                          "left": null,
                                          "right": null,
                                          "symbol": "p",
                                        },
                                      },
                                      "symbol": "RDp",
                                    },
                                  },
                                  "symbol": "PC\\"z)5V(?RDp",
                                },
                              },
                              "symbol": "
      PC\\"z)5V(?RDp",
                            },
                          },
                          "symbol": "cmt
      PC\\"z)5V(?RDp",
                        },
                      },
                      "symbol": "ev:%#7UbT9@W'}4{Ncmt
      PC\\"z)5V(?RDp",
                    },
                  },
                  "right": HNode {
                    "props": Object {
                      "freq": 8627,
                      "left": null,
                      "right": null,
                      "symbol": " ",
                    },
                  },
                  "symbol": "ev:%#7UbT9@W'}4{Ncmt
      PC\\"z)5V(?RDp ",
                },
              },
              "symbol": "_lGqXZ+<>jK][Yx/Ofi28AFgn-13|6SIkd*	\\\\^BEM=oLhyH$,wu.sarev:%#7UbT9@W'}4{Ncmt
      PC\\"z)5V(?RDp ",
            },
          },
          "right": null,
          "symbol": "_lGqXZ+<>jK][Yx/Ofi28AFgn-13|6SIkd*	\\\\^BEM=oLhyH$,wu.sarev:%#7UbT9@W'}4{Ncmt
      PC\\"z)5V(?RDp ",
        },
      }
    `);
  });
});
