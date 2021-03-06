#arshjul.t-fk.no

A visualization of activities for Telemark county council.
The chart is based on the [Circular Heat Chart](https://github.com/prcweb/d3-circularheat) created by [Peter Cook](http://prcweb.co.uk).

##Usage
Change data.json to suit your needs.

##data.json
Two main parts:
config - This is where you configure size, main colors and page title
data - Array of one or more categories

###config
**title** Page title
**segmentHeight** The height of each segment
**innerRadius** Inner radius for the circle
**numSegments** Number of segments
**radialLabels** Array of radial-labels (Not in use)
**segmentLabels** Array of segment objects. Each need properties for text and value.
**margin** Object for the circles margin. Properties for top, right, bottom and left
**noActivitiesColor** Specify color for segments with no activities. Text or hex
**hoverColor** Color for mouseover event for the segments. Text or hex

###data
Array of categories. Each category will be represented with it's own circle.
These are the properties for each category.

**title** Title for category. Will be used in menu and listings
**description** Description for category
**color** The color for category's segments with activities
**no_activities_message** Text for listing if given segment has no activities
**activities** Array of segments. Each with it's own array of activities. No activity is represented with an empty array.
Each activity object needs these properties.
**title** Title for the activity
**date** Date for activity. Needs to be formatted like this YYYY-MM-DD
**description** Description

###Example

```
{
  "config" : {
    "title": "Telemark fylkeskommune - årshjul",
    "segmentHeight" : 30,
    "innerRadius" : 120,
    "numSegments" : 12,
    "radialLabels" : [],
    "segmentLabels" : [
      {"text":"Januar", "value":1},
      {"text":"Februar", "value":2},
      {"text":"Mars", "value":3},
      {"text":"April", "value":4},
      {"text":"Mai", "value":5},
      {"text":"Juni", "value":6},
      {"text":"Juli", "value":7},
      {"text":"August", "value":8},
      {"text":"September", "value":9},
      {"text":"Oktober", "value":10},
      {"text":"November", "value":11},
      {"text":"Desember", "value":12}
    ],
    "margin" : {
      "top": 20,
      "right": 20,
      "bottom": 20,
      "left": 20
    },
    "noActivitiesColor" : "white",
    "hoverColor" : "red"
  },
  "data" : [
    {
      "title":"Årsrapport",
      "description" : "",
      "color" : "#FFC000",
      "no_activities_message":"Ingen aktiviteter denne måneden",
      "activities": {
        "1":[
            {
              "title" : "Frist for bestilling av økonomiske analyser fra øk.avd.",
              "date"  : "2015-01-16",
              "description" : "Ansvarlig : avdelingene.<br />Leveranse til : økonomiavdelingen"
            },
            {
              "title" : "Frist leveranse – del 1 (mål, aktiviteter og tiltak)",
              "date"  : "2015-01-16",
              "description" : "Ansvarlig : avdelingene.<br />Leveranse til : analysegruppen"
            },
            {
              "title" : "1. leveranse sammenstilles og drøftes i analysegruppen",
              "date"  : "2015-01-20",
              "description" : ""
            }
        ],
        "2":[
            {
              "title" : "Frist leveranse – del 2 (resultater og effekter, måloppnåelse og endringsbehov)",
              "date": "2015-02-06",
              "description" : "Ansvarlig : avdelingene.<br />Leveranse til : analysegruppen"
            },
            {
              "title" : "2. leveranse sammenstilles og drøftes i analysegruppen",
              "date": "2015-02-10",
              "description" : ""
            },
            {
              "title" : "Frist for bearbeiding samlet utgave",
              "date": "2015-02-18",
              "description" : "Ansvarlig : avdelingene.<br />Leveranse til : analysegruppen"
            },
            {
              "title" : "Del 1 og 2 sammenstilles ",
              "date": "2015-02-19",
              "description" : "Ansvarlig : analysegruppen.<br />Leveranse til : ledergruppen"
            },
            {
              "title" : "Samlet første utkast drøftes i Ledergruppen",
              "date": "2015-02-23",
              "description" : ""
            }
        ],
        "3":[
            {
              "title" : "Frist for bearbeidet utgave",
              "date": "2015-03-02",
              "description" : "Ansvarlig : avdelingene.<br />Leveranse til : analysegruppen"
            },
            {
              "title" : "Kommunikasjonsteamet språkvasker",
              "date": "2015-03-02",
              "description" : "Pågår kontinuerlig."
            },
            {
              "title" : "Nytt utkast, med illustrasjoner",
              "date": "2015-03-09",
              "description" : "Ansvarlig : analysegruppen.<br>Leveranse til : ledergruppen"
            },
            {
              "title" : "Økonomikapittel og økonomitabeller innarbeides når KOSTRA-tallene publiseres 16.03.",
              "date": "2015-03-16",
              "description" : "Ansvarlig : økonomiavdelingen.<br />Leveranse til : analysegruppen"
            },
            {
              "title" : "Trykkeklart manus",
              "date": "2015-03-20",
              "description" : "Ansvarlig : analysegruppen"
            },
            {
              "title" : "Politisk sak ferdigstilles",
              "date": "2015-03-27",
              "description" : "Ansvarlig : analysegruppen"
            }
        ],
        "4":[
            {
              "title" : "Behandling i kontrollutvalget",
              "date": "2015-04-10",
              "description" : ""
            },
            {
              "title" : "Behandling i FU",
              "date": "2015-04-16",
              "description" : ""
            },
          {
              "title" : "Behandling i FT",
              "date": "2015-04-29",
              "description" : ""
            }
        ],
        "5":[],
        "6":[],
        "7":[],
        "8":[],
        "9":[],
        "10":[],
        "11":[
              {
                "title" : "Notat om struktur, innhold og framdrift drøftes og forankres i analysegruppen",
                "date": "2014-11-04",
                "description" : ""
              },
              {
                "title" : "Oppdragsnotatet behandles i Ledergruppen",
                "date": "2014-11-17",
                "description" : "Ansvarlig : analysegruppen.<br />Leveranse til : ledergruppen"
              },
              {
                "title" : "Oppstart i analysegruppen",
                "date": "2014-11-18",
                "description" : ""
              }
        ],
        "12":[]
      }
    },
    {
      "title":"Langtidsprioriteringer (LTP)",
      "description" : "",
      "color" : "#4472C4",
      "no_activities_message":"Ingen aktiviteter denne måneden",
      "activities": {
        "1":[],
        "2":[],
        "3":[
          {
            "title" : "Orientering om budsjettnotatet i fylkesrådmannens ledergruppe",
            "date": "2013-03-03",
            "description" : ""
          },
          {
            "title" : "Analysegruppens innspill til den strategiske overbygningen",
            "date": "2013-03-15",
            "description" : ""
          },
          {
            "title" : "Den strategiske overbygningen drøftes i fylkesrådmannens ledergruppe",
            "date": "2013-03-24",
            "description" : ""
          }
        ],
        "4":[
          {
            "title" : "Rammeområdenes innspill",
            "date": "2013-04-04",
            "description" : ""
          },
          {
            "title" : "Sak til FU om politiske og økonomiske hovedutfordringer",
            "date": "2013-04-10",
            "description" : ""
          },
          {
            "title" : "Samlet utkast drøftes i fylkesrådmannens ledergruppe",
            "date": "2013-04-28",
            "description" : ""
          }
        ],
        "5":[
          {
            "title" : "Endelig drøfting i fylkesrådmannens ledergruppe",
            "date": "2013-05-12",
            "description" : ""
          },
          {
            "title" : "Utsendelse av sak",
            "date": "2013-05-23",
            "description" : ""
          },
          {
            "title" : "Behandling i rådet for funksjonshemmede",
            "date": "2013-05-26",
            "description" : ""
          }
        ],
        "6":[
          {
            "title" : "Behandling i HU",
            "date": "2013-06-02",
            "description" : "Foregår 02. - 05. juni"
          },
          {
            "title" : "Behandling i eldrerådet",
            "date": "2013-06-04",
            "description" : ""
          },
          {
            "title" : "Behandling i FU",
            "date": "2013-06-11",
            "description" : ""
          },
          {
            "title" : "Behandling i FT",
            "date": "2013-06-17",
            "description" : "Foregår 17. - 18. juni"
          }
        ],
        "7":[],
        "8":[],
        "9":[],
        "10":[],
        "11":[],
        "12":[]
      }
    },
    {
      "title":"Mål- og budsjettdokumentet (MoB)",
      "description" : "",
      "color" : "#ED7D31",
      "no_activities_message":"Ingen aktiviteter denne måneden",
      "activities": {
        "1":[],
        "2":[],
        "3":[],
        "4":[],
        "5":[],
        "6":[
          {
            "title" : "Frist tall",
            "date": "2013-06-18",
            "description" : ""
          }
        ],
        "7":[
          {
            "title" : "Tall og tekst gjennomgås",
            "date": "2013-07-15",
            "description" : ""
          }
        ],
        "8":[
          {
            "title" : "Tall og tekst bearbeides",
            "date": "2013-08-01",
            "description" : "Pågår hele august og september"
          },
          {
            "title" : "Frist for innsparingstiltak handlingsprogram 2015 - 2018",
            "date": "2013-08-11",
            "description" : ""
          },
          {
            "title" : "Frist tekst",
            "date": "2013-08-29",
            "description" : ""
          },
          {
            "title" : "Tallbudsjettforslag til investeringsbudsjettet",
            "date": "2013-08-29",
            "description" : ""
          }
        ],
        "9":[
          {
            "title" : "Tall og tekst bearbeides",
            "date": "2013-09-01",
            "description" : "Pågår hele august og september"
          }
        ],
        "10":[
          {
            "title" : "Statsbudsjettet legges frem medio okt.",
            "date": "2013-10-15",
            "description" : "Dato ikke fastsatt"
          },
          {
            "title" : "Sak ferdig til politisk behandling",
            "date": "2013-10-20",
            "description" : ""
          },
          {
            "title" : "Pressekonferanse og offentliggjøring",
            "date": "2013-10-28",
            "description" : ""
          }
        ],
        "11":[
          {
            "title" : "Behandling i hovedutvalgene",
            "date": "2013-11-03",
            "description" : "Pågår 3. - 6. november"
          },
          {
            "title" : "Behandling i fylkesutvalget",
            "date": "2013-11-18",
            "description" : "Pågår 18. - 19. november"
          }
        ],
        "12":[
          {
            "title" : "Behandling i fylkestinget",
            "date": "2013-12-09",
            "description" : "Pågår 09. - 10. desember"
          }
        ]
      }
    },
    {
      "title":"Tertialrapport - årsregnskap",
      "description" : "",
      "color" : "#70AD47",
      "no_activities_message":"Ingen aktiviteter denne måneden",
      "activities": {
        "1":[],
        "2":[],
        "3":[],
        "4":[
          {
            "title" : "Tertialrapport 1.tertial: Rundskriv ut",
            "date": "2013-04-10",
            "description" : ""
          }
        ],
        "5":[
          {
            "title" : "Tertialrapport 1.tertial: Frist for tilbakerapportering",
            "date": "2013-05-09",
            "description" : ""
          },
          {
            "title" : "Tertialrapport 1.tertial: Behandling i FU",
            "date": "2013-05-26",
            "description" : ""
          }
        ],
        "6":[
          {
            "title" : "Tertialrapport 1.tertial: Behandling i FT",
            "date": "2013-06-18",
            "description" : ""
          }
        ],
        "7":[],
        "8":[
          {
            "title" : "Tertialrapport 2.tertial: Rundskriv ut",
            "date": "2013-08-14",
            "description" : ""
          }
        ],
        "9":[
          {
            "title" : "Tertialrapport 2.tertial: Frist for tilbakerapportering",
            "date": "2013-09-15",
            "description" : ""
          }
        ],
        "10":[
          {
            "title" : "Tertialrapport 2.tertial: Behandling i FU",
            "date": "2013-10-13",
            "description" : ""
          },
          {
            "title" : "Tertialrapport 2.tertial: Behandling i FT",
            "date": "2013-10-21",
            "description" : ""
          }
        ],
        "11":[],
        "12":[]
      }
    }
  ]
}
```