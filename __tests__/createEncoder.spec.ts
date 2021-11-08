import { dataset1 } from '../__mocks__/dataset';
import { createEncoder } from '../src/_old/createEncoder';

describe('encoder', () => {
  it.only('encodes dataset properly', async () => {
    const encoder = createEncoder(dataset1);
    expect(encoder).toMatchInlineSnapshot(`
      Node {
        "freq": 25678,
        "left": Node {
          "freq": 10301,
          "left": Node {
            "freq": 4645,
            "left": Node {
              "freq": 2178,
              "left": Node {
                "freq": 1043,
                "left": Node {
                  "freq": 518,
                  "left": null,
                  "right": null,
                  "symbol": "_",
                },
                "right": Node {
                  "freq": 525,
                  "left": null,
                  "right": null,
                  "symbol": "l",
                },
                "symbol": "_l",
              },
              "right": Node {
                "freq": 1135,
                "left": Node {
                  "freq": 553,
                  "left": Node {
                    "freq": 273,
                    "left": Node {
                      "freq": 135,
                      "left": null,
                      "right": null,
                      "symbol": "]",
                    },
                    "right": Node {
                      "freq": 138,
                      "left": Node {
                        "freq": 66,
                        "left": null,
                        "right": null,
                        "symbol": "Y",
                      },
                      "right": Node {
                        "freq": 72,
                        "left": null,
                        "right": null,
                        "symbol": "x",
                      },
                      "symbol": "Yx",
                    },
                    "symbol": "]Yx",
                  },
                  "right": Node {
                    "freq": 280,
                    "left": Node {
                      "freq": 139,
                      "left": null,
                      "right": null,
                      "symbol": "0",
                    },
                    "right": Node {
                      "freq": 141,
                      "left": null,
                      "right": null,
                      "symbol": "/",
                    },
                    "symbol": "0/",
                  },
                  "symbol": "]Yx0/",
                },
                "right": Node {
                  "freq": 582,
                  "left": Node {
                    "freq": 290,
                    "left": Node {
                      "freq": 141,
                      "left": null,
                      "right": null,
                      "symbol": "O",
                    },
                    "right": Node {
                      "freq": 149,
                      "left": Node {
                        "freq": 74,
                        "left": null,
                        "right": null,
                        "symbol": "2",
                      },
                      "right": Node {
                        "freq": 75,
                        "left": Node {
                          "freq": 36,
                          "left": null,
                          "right": null,
                          "symbol": "8",
                        },
                        "right": Node {
                          "freq": 39,
                          "left": null,
                          "right": null,
                          "symbol": "A",
                        },
                        "symbol": "8A",
                      },
                      "symbol": "28A",
                    },
                    "symbol": "O28A",
                  },
                  "right": Node {
                    "freq": 292,
                    "left": null,
                    "right": null,
                    "symbol": "f",
                  },
                  "symbol": "O28Af",
                },
                "symbol": "]Yx0/O28Af",
              },
              "symbol": "_l]Yx0/O28Af",
            },
            "right": Node {
              "freq": 2467,
              "left": Node {
                "freq": 1200,
                "left": Node {
                  "freq": 590,
                  "left": null,
                  "right": null,
                  "symbol": "i",
                },
                "right": Node {
                  "freq": 610,
                  "left": null,
                  "right": null,
                  "symbol": "n",
                },
                "symbol": "in",
              },
              "right": Node {
                "freq": 1267,
                "left": Node {
                  "freq": 617,
                  "left": Node {
                    "freq": 308,
                    "left": null,
                    "right": null,
                    "symbol": "g",
                  },
                  "right": Node {
                    "freq": 309,
                    "left": Node {
                      "freq": 149,
                      "left": null,
                      "right": null,
                      "symbol": "F",
                    },
                    "right": Node {
                      "freq": 160,
                      "left": null,
                      "right": null,
                      "symbol": "-",
                    },
                    "symbol": "F-",
                  },
                  "symbol": "gF-",
                },
                "right": Node {
                  "freq": 650,
                  "left": Node {
                    "freq": 323,
                    "left": null,
                    "right": null,
                    "symbol": "S",
                  },
                  "right": Node {
                    "freq": 327,
                    "left": Node {
                      "freq": 162,
                      "left": Node {
                        "freq": 80,
                        "left": null,
                        "right": null,
                        "symbol": "1",
                      },
                      "right": Node {
                        "freq": 82,
                        "left": Node {
                          "freq": 40,
                          "left": null,
                          "right": null,
                          "symbol": "3",
                        },
                        "right": Node {
                          "freq": 42,
                          "left": Node {
                            "freq": 21,
                            "left": null,
                            "right": null,
                            "symbol": "|",
                          },
                          "right": Node {
                            "freq": 21,
                            "left": null,
                            "right": null,
                            "symbol": "	",
                          },
                          "symbol": "|	",
                        },
                        "symbol": "3|	",
                      },
                      "symbol": "13|	",
                    },
                    "right": Node {
                      "freq": 165,
                      "left": null,
                      "right": null,
                      "symbol": "I",
                    },
                    "symbol": "13|	I",
                  },
                  "symbol": "S13|	I",
                },
                "symbol": "gF-S13|	I",
              },
              "symbol": "ingF-S13|	I",
            },
            "symbol": "_l]Yx0/O28AfingF-S13|	I",
          },
          "right": Node {
            "freq": 5656,
            "left": Node {
              "freq": 2746,
              "left": Node {
                "freq": 1350,
                "left": Node {
                  "freq": 666,
                  "left": Node {
                    "freq": 332,
                    "left": null,
                    "right": null,
                    "symbol": "d",
                  },
                  "right": Node {
                    "freq": 334,
                    "left": Node {
                      "freq": 165,
                      "left": null,
                      "right": null,
                      "symbol": "k",
                    },
                    "right": Node {
                      "freq": 169,
                      "left": null,
                      "right": null,
                      "symbol": "E",
                    },
                    "symbol": "kE",
                  },
                  "symbol": "dkE",
                },
                "right": Node {
                  "freq": 684,
                  "left": null,
                  "right": null,
                  "symbol": "o",
                },
                "symbol": "dkEo",
              },
              "right": Node {
                "freq": 1396,
                "left": Node {
                  "freq": 690,
                  "left": Node {
                    "freq": 342,
                    "left": Node {
                      "freq": 169,
                      "left": Node {
                        "freq": 84,
                        "left": null,
                        "right": null,
                        "symbol": "*",
                      },
                      "right": Node {
                        "freq": 85,
                        "left": Node {
                          "freq": 42,
                          "left": Node {
                            "freq": 21,
                            "left": Node {
                              "freq": 10,
                              "left": null,
                              "right": null,
                              "symbol": "\\\\",
                            },
                            "right": Node {
                              "freq": 11,
                              "left": null,
                              "right": null,
                              "symbol": "^",
                            },
                            "symbol": "\\\\^",
                          },
                          "right": Node {
                            "freq": 21,
                            "left": null,
                            "right": null,
                            "symbol": "6",
                          },
                          "symbol": "\\\\^6",
                        },
                        "right": Node {
                          "freq": 43,
                          "left": null,
                          "right": null,
                          "symbol": "B",
                        },
                        "symbol": "\\\\^6B",
                      },
                      "symbol": "*\\\\^6B",
                    },
                    "right": Node {
                      "freq": 173,
                      "left": null,
                      "right": null,
                      "symbol": "M",
                    },
                    "symbol": "*\\\\^6BM",
                  },
                  "right": Node {
                    "freq": 348,
                    "left": Node {
                      "freq": 173,
                      "left": null,
                      "right": null,
                      "symbol": "=",
                    },
                    "right": Node {
                      "freq": 175,
                      "left": null,
                      "right": null,
                      "symbol": "L",
                    },
                    "symbol": "=L",
                  },
                  "symbol": "*\\\\^6BM=L",
                },
                "right": Node {
                  "freq": 706,
                  "left": Node {
                    "freq": 352,
                    "left": Node {
                      "freq": 176,
                      "left": null,
                      "right": null,
                      "symbol": "y",
                    },
                    "right": Node {
                      "freq": 176,
                      "left": null,
                      "right": null,
                      "symbol": "h",
                    },
                    "symbol": "yh",
                  },
                  "right": Node {
                    "freq": 354,
                    "left": null,
                    "right": null,
                    "symbol": "u",
                  },
                  "symbol": "yhu",
                },
                "symbol": "*\\\\^6BM=Lyhu",
              },
              "symbol": "dkEo*\\\\^6BM=Lyhu",
            },
            "right": Node {
              "freq": 2910,
              "left": Node {
                "freq": 1437,
                "left": Node {
                  "freq": 717,
                  "left": null,
                  "right": null,
                  "symbol": "s",
                },
                "right": Node {
                  "freq": 720,
                  "left": Node {
                    "freq": 358,
                    "left": Node {
                      "freq": 176,
                      "left": Node {
                        "freq": 87,
                        "left": null,
                        "right": null,
                        "symbol": "H",
                      },
                      "right": Node {
                        "freq": 89,
                        "left": Node {
                          "freq": 44,
                          "left": null,
                          "right": null,
                          "symbol": "$",
                        },
                        "right": Node {
                          "freq": 45,
                          "left": Node {
                            "freq": 22,
                            "left": null,
                            "right": null,
                            "symbol": ",",
                          },
                          "right": Node {
                            "freq": 23,
                            "left": null,
                            "right": null,
                            "symbol": "w",
                          },
                          "symbol": ",w",
                        },
                        "symbol": "$,w",
                      },
                      "symbol": "H$,w",
                    },
                    "right": Node {
                      "freq": 182,
                      "left": null,
                      "right": null,
                      "symbol": "v",
                    },
                    "symbol": "H$,wv",
                  },
                  "right": Node {
                    "freq": 362,
                    "left": null,
                    "right": null,
                    "symbol": ".",
                  },
                  "symbol": "H$,wv.",
                },
                "symbol": "sH$,wv.",
              },
              "right": Node {
                "freq": 1473,
                "left": Node {
                  "freq": 724,
                  "left": null,
                  "right": null,
                  "symbol": "a",
                },
                "right": Node {
                  "freq": 749,
                  "left": null,
                  "right": null,
                  "symbol": "r",
                },
                "symbol": "ar",
              },
              "symbol": "sH$,wv.ar",
            },
            "symbol": "dkEo*\\\\^6BM=LyhusH$,wv.ar",
          },
          "symbol": "_l]Yx0/O28AfingF-S13|	IdkEo*\\\\^6BM=LyhusH$,wv.ar",
        },
        "right": Node {
          "freq": 15377,
          "left": Node {
            "freq": 6750,
            "left": Node {
              "freq": 3115,
              "left": Node {
                "freq": 1488,
                "left": null,
                "right": null,
                "symbol": "e",
              },
              "right": Node {
                "freq": 1627,
                "left": Node {
                  "freq": 782,
                  "left": Node {
                    "freq": 377,
                    "left": Node {
                      "freq": 188,
                      "left": Node {
                        "freq": 91,
                        "left": null,
                        "right": null,
                        "symbol": ":",
                      },
                      "right": Node {
                        "freq": 97,
                        "left": Node {
                          "freq": 48,
                          "left": null,
                          "right": null,
                          "symbol": "%",
                        },
                        "right": Node {
                          "freq": 49,
                          "left": Node {
                            "freq": 24,
                            "left": null,
                            "right": null,
                            "symbol": "#",
                          },
                          "right": Node {
                            "freq": 25,
                            "left": Node {
                              "freq": 12,
                              "left": null,
                              "right": null,
                              "symbol": "9",
                            },
                            "right": Node {
                              "freq": 13,
                              "left": Node {
                                "freq": 6,
                                "left": null,
                                "right": null,
                                "symbol": "@",
                              },
                              "right": Node {
                                "freq": 7,
                                "left": null,
                                "right": null,
                                "symbol": "W",
                              },
                              "symbol": "@W",
                            },
                            "symbol": "9@W",
                          },
                          "symbol": "#9@W",
                        },
                        "symbol": "%#9@W",
                      },
                      "symbol": ":%#9@W",
                    },
                    "right": Node {
                      "freq": 189,
                      "left": null,
                      "right": null,
                      "symbol": "U",
                    },
                    "symbol": ":%#9@WU",
                  },
                  "right": Node {
                    "freq": 405,
                    "left": Node {
                      "freq": 197,
                      "left": null,
                      "right": null,
                      "symbol": "b",
                    },
                    "right": Node {
                      "freq": 208,
                      "left": Node {
                        "freq": 102,
                        "left": Node {
                          "freq": 50,
                          "left": Node {
                            "freq": 25,
                            "left": null,
                            "right": null,
                            "symbol": "7",
                          },
                          "right": Node {
                            "freq": 25,
                            "left": null,
                            "right": null,
                            "symbol": "'",
                          },
                          "symbol": "7'",
                        },
                        "right": Node {
                          "freq": 52,
                          "left": null,
                          "right": null,
                          "symbol": "}",
                        },
                        "symbol": "7'}",
                      },
                      "right": Node {
                        "freq": 106,
                        "left": Node {
                          "freq": 53,
                          "left": null,
                          "right": null,
                          "symbol": "4",
                        },
                        "right": Node {
                          "freq": 53,
                          "left": null,
                          "right": null,
                          "symbol": "{",
                        },
                        "symbol": "4{",
                      },
                      "symbol": "7'}4{",
                    },
                    "symbol": "b7'}4{",
                  },
                  "symbol": ":%#9@WUb7'}4{",
                },
                "right": Node {
                  "freq": 845,
                  "left": Node {
                    "freq": 413,
                    "left": null,
                    "right": null,
                    "symbol": "T",
                  },
                  "right": Node {
                    "freq": 432,
                    "left": null,
                    "right": null,
                    "symbol": "c",
                  },
                  "symbol": "Tc",
                },
                "symbol": ":%#9@WUb7'}4{Tc",
              },
              "symbol": "e:%#9@WUb7'}4{Tc",
            },
            "right": Node {
              "freq": 3635,
              "left": Node {
                "freq": 1776,
                "left": Node {
                  "freq": 880,
                  "left": Node {
                    "freq": 434,
                    "left": null,
                    "right": null,
                    "symbol": "m",
                  },
                  "right": Node {
                    "freq": 446,
                    "left": Node {
                      "freq": 223,
                      "left": null,
                      "right": null,
                      "symbol": "N",
                    },
                    "right": Node {
                      "freq": 223,
                      "left": null,
                      "right": null,
                      "symbol": "P",
                    },
                    "symbol": "NP",
                  },
                  "symbol": "mNP",
                },
                "right": Node {
                  "freq": 896,
                  "left": null,
                  "right": null,
                  "symbol": "t",
                },
                "symbol": "mNPt",
              },
              "right": Node {
                "freq": 1859,
                "left": Node {
                  "freq": 907,
                  "left": null,
                  "right": null,
                  "symbol": "
      ",
                },
                "right": Node {
                  "freq": 952,
                  "left": Node {
                    "freq": 455,
                    "left": Node {
                      "freq": 224,
                      "left": Node {
                        "freq": 110,
                        "left": Node {
                          "freq": 54,
                          "left": null,
                          "right": null,
                          "symbol": "C",
                        },
                        "right": Node {
                          "freq": 56,
                          "left": null,
                          "right": null,
                          "symbol": "\\"",
                        },
                        "symbol": "C\\"",
                      },
                      "right": Node {
                        "freq": 114,
                        "left": Node {
                          "freq": 56,
                          "left": Node {
                            "freq": 27,
                            "left": Node {
                              "freq": 13,
                              "left": null,
                              "right": null,
                              "symbol": "z",
                            },
                            "right": Node {
                              "freq": 14,
                              "left": null,
                              "right": null,
                              "symbol": ")",
                            },
                            "symbol": "z)",
                          },
                          "right": Node {
                            "freq": 29,
                            "left": null,
                            "right": null,
                            "symbol": "5",
                          },
                          "symbol": "z)5",
                        },
                        "right": Node {
                          "freq": 58,
                          "left": Node {
                            "freq": 29,
                            "left": null,
                            "right": null,
                            "symbol": "V",
                          },
                          "right": Node {
                            "freq": 29,
                            "left": Node {
                              "freq": 14,
                              "left": null,
                              "right": null,
                              "symbol": "(",
                            },
                            "right": Node {
                              "freq": 15,
                              "left": Node {
                                "freq": 7,
                                "left": null,
                                "right": null,
                                "symbol": "G",
                              },
                              "right": Node {
                                "freq": 8,
                                "left": Node {
                                  "freq": 3,
                                  "left": Node {
                                    "freq": 1,
                                    "left": null,
                                    "right": null,
                                    "symbol": "q",
                                  },
                                  "right": Node {
                                    "freq": 2,
                                    "left": null,
                                    "right": null,
                                    "symbol": "X",
                                  },
                                  "symbol": "qX",
                                },
                                "right": Node {
                                  "freq": 5,
                                  "left": Node {
                                    "freq": 2,
                                    "left": null,
                                    "right": null,
                                    "symbol": "Z",
                                  },
                                  "right": Node {
                                    "freq": 3,
                                    "left": null,
                                    "right": null,
                                    "symbol": "+",
                                  },
                                  "symbol": "Z+",
                                },
                                "symbol": "qXZ+",
                              },
                              "symbol": "GqXZ+",
                            },
                            "symbol": "(GqXZ+",
                          },
                          "symbol": "V(GqXZ+",
                        },
                        "symbol": "z)5V(GqXZ+",
                      },
                      "symbol": "C\\"z)5V(GqXZ+",
                    },
                    "right": Node {
                      "freq": 231,
                      "left": Node {
                        "freq": 114,
                        "left": null,
                        "right": null,
                        "symbol": "R",
                      },
                      "right": Node {
                        "freq": 117,
                        "left": null,
                        "right": null,
                        "symbol": "D",
                      },
                      "symbol": "RD",
                    },
                    "symbol": "C\\"z)5V(GqXZ+RD",
                  },
                  "right": Node {
                    "freq": 497,
                    "left": Node {
                      "freq": 232,
                      "left": null,
                      "right": null,
                      "symbol": "p",
                    },
                    "right": Node {
                      "freq": 265,
                      "left": Node {
                        "freq": 130,
                        "left": Node {
                          "freq": 65,
                          "left": null,
                          "right": null,
                          "symbol": "K",
                        },
                        "right": Node {
                          "freq": 65,
                          "left": Node {
                            "freq": 30,
                            "left": Node {
                              "freq": 15,
                              "left": null,
                              "right": null,
                              "symbol": "?",
                            },
                            "right": Node {
                              "freq": 15,
                              "left": null,
                              "right": null,
                              "symbol": "<",
                            },
                            "symbol": "?<",
                          },
                          "right": Node {
                            "freq": 35,
                            "left": Node {
                              "freq": 16,
                              "left": null,
                              "right": null,
                              "symbol": ">",
                            },
                            "right": Node {
                              "freq": 19,
                              "left": null,
                              "right": null,
                              "symbol": "j",
                            },
                            "symbol": ">j",
                          },
                          "symbol": "?<>j",
                        },
                        "symbol": "K?<>j",
                      },
                      "right": Node {
                        "freq": 135,
                        "left": null,
                        "right": null,
                        "symbol": "[",
                      },
                      "symbol": "K?<>j[",
                    },
                    "symbol": "pK?<>j[",
                  },
                  "symbol": "C\\"z)5V(GqXZ+RDpK?<>j[",
                },
                "symbol": "
      C\\"z)5V(GqXZ+RDpK?<>j[",
              },
              "symbol": "mNPt
      C\\"z)5V(GqXZ+RDpK?<>j[",
            },
            "symbol": "e:%#9@WUb7'}4{TcmNPt
      C\\"z)5V(GqXZ+RDpK?<>j[",
          },
          "right": Node {
            "freq": 8627,
            "left": null,
            "right": null,
            "symbol": " ",
          },
          "symbol": "e:%#9@WUb7'}4{TcmNPt
      C\\"z)5V(GqXZ+RDpK?<>j[ ",
        },
        "symbol": "_l]Yx0/O28AfingF-S13|	IdkEo*\\\\^6BM=LyhusH$,wv.are:%#9@WUb7'}4{TcmNPt
      C\\"z)5V(GqXZ+RDpK?<>j[ ",
      }
    `);
  });
});
