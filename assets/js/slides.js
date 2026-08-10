/* Optional per-project slide order + captions.
   The slider auto-ingests every image in window.MEDIA[slug]; this file only
   refines ORDER and adds CAPTIONS. Images not listed here still appear
   (after the ordered ones, with no caption). Safe to leave a slug out. */
window.SLIDE_META = {
  "vex-highschool":{
    order:["vex-highschool-02.jpg","vex-highschool-03.jpg","vex-highschool-01.jpg"],
    caps:{
      "vex-highschool-02.jpg":"Our first VEX World Championship appearance.",
      "vex-highschool-03.jpg":"Eastwood High School team with the competition robot.",
      "vex-highschool-01.jpg":"With the robot's control system.",
      "vex-highschool-v01.mp4":"Qualification match at VEX Worlds.",
      "vex-highschool-v02.mp4":"The robot's long-reach lift, deployed.",
      "vex-highschool-v03.mp4":"The Eastwood team at the competition field."
    }
  },
  "overzero":{
    order:["overzero-03.jpg","overzero-02.jpg","overzero-01.jpg","overzero-05.jpg","overzero-04.jpg"],
    caps:{
      "overzero-03.jpg":"A full house, downtown El Paso.",
      "overzero-02.jpg":"Live sets, most nights self-booked.",
      "overzero-01.jpg":"Local Artist.",
      "overzero-05.jpg":"Hosting Viral Artists Yungatita",
      "overzero-04.jpg":"OverZero merch — the brand end to end.",
      "overzero-v01.mp4":"A night at OverZero."
    }
  },
  "ceramic-am":{
    order:["ceramic-am-02.jpg","ceramic-am-01.jpg","ceramic-am-03.jpg","ceramic-am-04.jpg"],
    caps:{
      "ceramic-am-02.jpg":"Direct-ink writing — ceramic paste extruded through a fine syringe nozzle.",
      "ceramic-am-01.jpg":"The lead-based ceramic paste, prepared for extrusion.",
      "ceramic-am-03.jpg":"Printing a curved test geometry to study line resolution.",
      "ceramic-am-04.jpg":"A raster-filled test print — studying settling and layer bonding.",
      "ceramic-am-v01.mp4":"A print in progress."
    }
  },
  "engine-teardown":{
    order:["engine-teardown-03.jpg","engine-teardown-02.jpg","engine-teardown-01.jpg"],
    caps:{
      "engine-teardown-01.jpg":"Cat diesel with the head off — camshaft, rockers, and valvetrain during teardown.",
      "engine-teardown-03.jpg":"The incoming cohort with the rebuilt engine.",
      "engine-teardown-02.jpg":"On site at Caterpillar — a 785 mining haul truck."
    }
  },
  "6060-heater":{
    order:["6060-heater-08.jpg","6060-heater-06.jpg","6060-heater-05.jpg","6060-heater-02.jpg","6060-heater-01.jpg","6060-heater-07.jpg","6060-heater-03.jpg","6060-heater-04.jpg","6060-heater-09.jpg"],
    caps:{
      "6060-heater-02.jpg":"Heater / evaporator unit on the bench, instrumented for the soak-back investigation.",
      "6060-heater-01.jpg":"Thermocouple leads mapped by bank and location before calibration.",
      "6060-heater-07.jpg":"Coil and internal insulation — the surface stored heat soaks back into after shutdown.",
      "6060-heater-08.jpg":"The 600-ton 6060 hydraulic mining shovel the HVAC unit conditions.",
      "6060-heater-03.jpg":"Operator cab — roughly 10 m³ conditioned by a 0.34 m³ enclosure.",
      "6060-heater-06.jpg":"Cat hydraulic shovel in the pit.",
      "6060-heater-05.jpg":"Haul fleet in a winter pit — the environment the fix had to hold in.",
      "6060-heater-04.jpg":"Loading in snow at the customer site.",
      "6060-heater-09.jpg":"Logger wiring onto the CAN line."
    }
  },
  "high-cycling":{
    order:["high-cycling-01.jpg","high-cycling-02.jpg","high-cycling-03.jpg"],
    caps:{
      "high-cycling-01.jpg":"The measurement rig on the bench — SUPERCOMM logger, thermocouples, and the harness into a 70-pin ECM.",
      "high-cycling-02.jpg":"Service-port pressure transducers and surface TCs, logged live through CANape.",
      "high-cycling-03.jpg":"High- and low-side couplers adapted onto pressure transducers at the service ports."
    }
  },
  "chiller":{
    order:["chiller-01.jpg","chiller-03.jpg","chiller-02.jpg","chiller-04.jpg","chiller-05.jpg","chiller-06.jpg","chiller-07.jpg","chiller-08.jpg"],
    caps:{
      "chiller-01.jpg":"Two-loop modular chiller — multi-fan condenser array on the bench.",
      "chiller-03.jpg":"Ruggedized control enclosure built for the prototype.",
      "chiller-02.jpg":"Instrumented for leg-by-leg pressure bracketing.",
      "chiller-04.jpg":"Coolant and refrigerant plumbing under test."
    }
  },
  "cab-air":{
    order:["cab-air-v01.mp4","cab-air-04.jpg","cab-air-03.jpg","cab-air-01.jpg","cab-air-02.jpg"],
    caps:{
      "cab-air-04.jpg":"Smoke-leak visualization on a sealed cab.",
      "cab-air-03.jpg":"Cab interior instrumented for pressurization and CO₂ accumulation testing.",
      "cab-air-01.jpg":"Sealing survey across the cab configuration.",
      "cab-air-02.jpg":"Dash and duct access during leakage testing.",
      "cab-air-v01.mp4":"Bench-testing the cab HVAC control head."
    }
  },
  "solar-am":{
    order:["solar-am-07.jpg","solar-am-02.jpg","solar-am-01.jpg","solar-am-04.jpg","solar-am-05.jpg","solar-am-03.jpg","solar-am-08.jpg","solar-am-06.jpg"],
    caps:{
      "solar-am-04.jpg":"UV fluorescence: polymer fibers glowing in the recycled metal powder.",
      "solar-am-05.jpg":"The cleaning paintbrush — the only tool that fluoresced identically.",
      "solar-am-01.jpg":"Powder recycling and sieving station.",
      "solar-am-02.jpg":"A printed qualification coupon.",
      "solar-am-03.jpg":"Optical microscopy for porosity on sectioned coupons.",
      "solar-am-08.jpg":"At the powder-bed-fusion machine, full PPE.",
      "solar-am-07.jpg":"Cleaning and powder-handling under the revised SOP.",
      "solar-am-06.jpg":"On site at Solar Turbines."
    }
  },
  "heat-exchanger":{
    order:["heat-exchanger-02.jpg","heat-exchanger-04.jpg","heat-exchanger-v01.mp4","heat-exchanger-05.jpg","heat-exchanger-03.jpg","heat-exchanger-01.jpg","heat-exchanger-06.jpg","heat-exchanger-07.jpg"],
    caps:{
      "heat-exchanger-03.jpg":"Assembled air-to-water shell-and-tube exchanger on the test rig.",
      "heat-exchanger-02.jpg":"Copper U-tube bundle, cut and soldered by hand.",
      "heat-exchanger-01.jpg":"Lab test setup at off-design flow (pump-limited).",
      "heat-exchanger-04.jpg":"CFD crossflow check in ANSYS Fluent / STAR-CCM+.",
      "heat-exchanger-05.jpg":"Modeled temperature distribution profile.",
      "heat-exchanger-06.jpg":"The finished exchanger — copper U-tube bundle in the PVC shell.",
      "heat-exchanger-07.jpg":"Looking into the shell: the hand-soldered U-tube bundle and baffles.",
      "heat-exchanger-v01.mp4":"Timelapse — building the CFD mesh in ANSYS."
    }
  },
  "media-dispenser":{
    order:["media-dispenser-02.jpg","media-dispenser-04.jpg","media-dispenser-01.jpg","media-dispenser-03.jpg","media-dispenser-06.jpg","media-dispenser-05.jpg"],
    caps:{
      "media-dispenser-02.jpg":"The automated dispensing cell: conveyor, pump fluid path, Arduino sequence logic.",
      "media-dispenser-04.jpg":"Metered dispense over the moving dish carrier.",
      "media-dispenser-01.jpg":"3D-printed dish carousel and custom geared parts.",
      "media-dispenser-03.jpg":"Early conveyor mechanism sketch.",
      "media-dispenser-06.jpg":"Fusion 360 assembly.",
      "media-dispenser-05.jpg":"Presenting the build — winner, UTEP mechatronics design competition.",
      "media-dispenser-v01.mp4":"The dispensing cell in motion."
    }
  },
  "steris":{
    order:["steris-03.jpg","steris-04.jpg","steris-01.jpg","steris-02.jpg"],
    caps:{
      "steris-03.jpg":"Leading the daily quality-assurance meeting.",
      "steris-04.jpg":"Leading Kaizen training for lab operations.",
      "steris-01.jpg":"On the floor with the QA and metrology team.",
      "steris-02.jpg":"Lab-redesign walk-through — spaghetti-mapping the workflow onto schematics for a proposed remodel."
    }
  },
  "robotics":{
    order:["robotics-01.jpg","robotics-02.jpg"],
    caps:{
      "robotics-01.jpg":"VEX-U competition robot.",
      "robotics-02.jpg":"The UTEP VEX-U team.",
      "robotics-v01.mp4":"A competition run."
    }
  },
  "film":{
    order:["film-01.jpg","film-02.jpg","film-03.jpg","film-v01.mp4","film-04.jpg"],
    caps:{
      "film-01.jpg":"The production team.",
      "film-03.jpg":"Cast table read.",
      "film-02.jpg":"Blackmagic 4K rig — FLOAT (2025), shot in BRAW at 25 fps.",
      "film-04.jpg":"On location.",
      "film-v01.mp4":"On set — FLOAT (2025)."
    }
  }
};
