// Define courses for each branch and semester
const courses = {
    "AI_ML": {
        "3": {
            "fixed": ["AI_ML_3_courseA" , "AI_ML_3_courseB", "AI_ML_3_courseC", "AI_ML_3_courseD", "AI_ML_3_courseE"],
            "electives": ["AI_ML_3_ElectiveA", "AI_ML_3_ElectiveB", "AI_ML_3_ElectiveC"]
        },
        "4": {
            "fixed": ["AI_ML_4_courseA" , "AI_ML_4_courseB", "AI_ML_4_courseC", "AI_ML_4_courseD", "AI_ML_4_courseE"],
            "electives": ["AI_ML_4_ElectiveA", "AI_ML_4_ElectiveB", "AI_ML_4_ElectiveC"]
        },
        "5": {
            "fixed": ["AI_ML_5_courseA" , "AI_ML_5_courseB", "AI_ML_5_courseC", "AI_ML_5_courseD", "AI_ML_5_courseE"],
            "electives": ["AI_ML_5_ElectiveA", "AI_ML_5_ElectiveB", "AI_ML_5_ElectiveC"]
        },
        "6": {
            "fixed": ["AI_ML_6_courseA" , "AI_ML_6_courseB", "AI_ML_6_courseC", "AI_ML_6_courseD", "AI_ML_6_courseE"],
            "electives": ["AI_ML_6_ElectiveA", "AI_ML_6_ElectiveB", "AI_ML_6_ElectiveC"]
        },
        "7": {
            "fixed": ["AI_ML_7_courseA" , "AI_ML_7_courseB", "AI_ML_7_courseC", "AI_ML_7_courseD", "AI_ML_7_courseE"],
            "electives": ["AI_ML_7_ElectiveA", "AI_ML_7_ElectiveB", "AI_ML_7_ElectiveC"]
        },
        "8": {
            "fixed": ["AI_ML_8_courseA" , "AI_ML_8_courseB", "AI_ML_8_courseC", "AI_ML_8_courseD", "AI_ML_8_courseE"],
            "electives": ["AI_ML_8_ElectiveA", "AI_ML_8_ElectiveB", "AI_ML_8_ElectiveC"]
        },
        
    },

    //Aeronautical
    "Aeronautical": {
        "3": {
            "fixed": ["Aeronautical_3_courseA" , "Aeronautical_3_courseB", "Aeronautical_3_courseC", "Aeronautical_3_courseD", "Aeronautical_3_courseE"],
            "electives": ["Aeronautical_3_ElectiveA", "Aeronautical_3_ElectiveB", "Aeronautical_3_ElectiveC"]
        },
        "4": {
            "fixed": ["Aeronautical_4_courseA" , "Aeronautical_4_courseB", "Aeronautical_4_courseC", "Aeronautical_4_courseD", "Aeronautical_4_courseE"],
            "electives": ["Aeronautical_4_ElectiveA", "Aeronautical_4_ElectiveB", "Aeronautical_4_ElectiveC"]
        },
        "5": {
            "fixed": ["Aeronautical_5_courseA" , "Aeronautical_5_courseB", "Aeronautical_5_courseC", "Aeronautical_5_courseD", "Aeronautical_5_courseE"],
            "electives": ["Aeronautical_5_ElectiveA", "Aeronautical_5_ElectiveB", "Aeronautical_5_ElectiveC"]
        },
        "6": {
            "fixed": ["Aeronautical_6_courseA" , "Aeronautical_6_courseB", "Aeronautical_6_courseC", "Aeronautical_6_courseD", "Aeronautical_6_courseE"],
            "electives": ["Aeronautical_6_ElectiveA", "Aeronautical_6_ElectiveB", "Aeronautical_6_ElectiveC"]
        },
        "7": {
            "fixed": ["Aeronautical_7_courseA" , "Aeronautical_7_courseB", "Aeronautical_7_courseC", "Aeronautical_7_courseD", "Aeronautical_7_courseE"],
            "electives": ["Aeronautical_7_ElectiveA", "Aeronautical_7_ElectiveB", "Aeronautical_7_ElectiveC"]
        },
        "8": {
            "fixed": ["Aeronautical_8_courseA" , "Aeronautical_8_courseB", "Aeronautical_8_courseC", "Aeronautical_8_courseD", "Aeronautical_8_courseE"],
            "electives": ["Aeronautical_8_ElectiveA", "Aeronautical_8_ElectiveB", "Aeronautical_8_ElectiveC"]
        },
    },
        //Automobile
        "Automobile": {
        "3": {
            "fixed": ["Automobile_3_courseA" , "Automobile_3_courseB", "Automobile_3_courseC", "Automobile_3_courseD", "Automobile_3_courseE"],
            "electives": ["Automobile_3_ElectiveA", "Automobile_3_ElectiveB", "Automobile_3_ElectiveC"]
        },
        "4": {
            "fixed": ["Automobile_4_courseA" , "Automobile_4_courseB", "Automobile_4_courseC", "Automobile_4_courseD", "Automobile_4_courseE"],
            "electives": ["Automobile_4_ElectiveA", "Automobile_4_ElectiveB", "Automobile_4_ElectiveC"]
        },
        "5": {
            "fixed": ["Automobile_5_courseA" , "Automobile_5_courseB", "Automobile_5_courseC", "Automobile_5_courseD", "Automobile_5_courseE"],
            "electives": ["Automobile_5_ElectiveA", "Automobile_5_ElectiveB", "Automobile_5_ElectiveC"]
        },
        "6": {
            "fixed": ["Automobile_6_courseA" , "Automobile_6_courseB", "Automobile_6_courseC", "Automobile_6_courseD", "Automobile_6_courseE"],
            "electives": ["Automobile_6_ElectiveA", "Automobile_6_ElectiveB", "Automobile_6_ElectiveC"]
        },
        "7": {
            "fixed": ["Automobile_7_courseA" , "Automobile_7_courseB", "Automobile_7_courseC", "Automobile_7_courseD", "Automobile_7_courseE"],
            "electives": ["Automobile_7_ElectiveA", "Automobile_7_ElectiveB", "Automobile_7_ElectiveC"]
        },
        "8": {
            "fixed": ["Automobile_8_courseA" , "Automobile_8_courseB", "Automobile_8_courseC", "Automobile_8_courseD", "Automobile_8_courseE"],
            "electives": ["Automobile_8_ElectiveA", "Automobile_8_ElectiveB", "Automobile_8_ElectiveC"]
        },
    },
        //Biotechnology
        "Biotechnology": {
        "3": {
            "fixed": ["Biotechnology_3_courseA" , "Biotechnology_3_courseB", "Biotechnology_3_courseC", "Biotechnology_3_courseD", "Biotechnology_3_courseE"],
            "electives": ["Biotechnology_3_ElectiveA", "Biotechnology_3_ElectiveB", "Biotechnology_3_ElectiveC"]
        },
        "4": {
            "fixed": ["Biotechnology_4_courseA" , "Biotechnology_4_courseB", "Biotechnology_4_courseC", "Biotechnology_4_courseD", "Biotechnology_4_courseE"],
            "electives": ["Biotechnology_4_ElectiveA", "Biotechnology_4_ElectiveB", "Biotechnology_4_ElectiveC"]
        },
        "5": {
            "fixed": ["Biotechnology_5_courseA" , "Biotechnology_5_courseB", "Biotechnology_5_courseC", "Biotechnology_5_courseD", "Biotechnology_5_courseE"],
            "electives": ["Biotechnology_5_ElectiveA", "Biotechnology_5_ElectiveB", "Biotechnology_5_ElectiveC"]
        },
        "6": {
            "fixed": ["Biotechnology_6_courseA" , "Biotechnology_6_courseB", "Biotechnology_6_courseC", "Biotechnology_6_courseD", "Biotechnology_6_courseE"],
            "electives": ["Biotechnology_6_ElectiveA", "Biotechnology_6_ElectiveB", "Biotechnology_6_ElectiveC"]
        },
        "7": {
            "fixed": ["Biotechnology_7_courseA" , "Biotechnology_7_courseB", "Biotechnology_7_courseC", "Biotechnology_7_courseD", "Biotechnology_7_courseE"],
            "electives": ["Biotechnology_7_ElectiveA", "Biotechnology_7_ElectiveB", "Biotechnology_7_ElectiveC"]
        },
        "8": {
            "fixed": ["Biotechnology_8_courseA" , "Biotechnology_8_courseB", "Biotechnology_8_courseC", "Biotechnology_8_courseD", "Biotechnology_8_courseE"],
            "electives": ["Biotechnology_8_ElectiveA", "Biotechnology_8_ElectiveB", "Biotechnology_8_ElectiveC"]
        },
    }, 
    
     //Chemical
     "Chemical": {
        "3": {
            "fixed": ["Chemical_3_courseA" , "Chemical_3_courseB", "Chemical_3_courseC", "Chemical_3_courseD", "Chemical_3_courseE"],
            "electives": ["Chemical_3_ElectiveA", "Chemical_3_ElectiveB", "Chemical_3_ElectiveC"]
        },
        "4": {
            "fixed": ["Chemical_4_courseA" , "Chemical_4_courseB", "Chemical_4_courseC", "Chemical_4_courseD", "Chemical_4_courseE"],
            "electives": ["Chemical_4_ElectiveA", "Chemical_4_ElectiveB", "Chemical_4_ElectiveC"]
        },
        "5": {
            "fixed": ["Chemical_5_courseA" , "Chemical_5_courseB", "Chemical_5_courseC", "Chemical_5_courseD", "Chemical_5_courseE"],
            "electives": ["Chemical_5_ElectiveA", "Chemical_5_ElectiveB", "Chemical_5_ElectiveC"]
        },
        "6": {
            "fixed": ["Chemical_6_courseA" , "Chemical_6_courseB", "Chemical_6_courseC", "Chemical_6_courseD", "Chemical_6_courseE"],
            "electives": ["Chemical_6_ElectiveA", "Chemical_6_ElectiveB", "Chemical_6_ElectiveC"]
        },
        "7": {
            "fixed": ["Chemical_7_courseA" , "Chemical_7_courseB", "Chemical_7_courseC", "Chemical_7_courseD", "Chemical_7_courseE"],
            "electives": ["Chemical_7_ElectiveA", "Chemical_7_ElectiveB", "Chemical_7_ElectiveC"]
        },
        "8": {
            "fixed": ["Chemical_8_courseA" , "Chemical_8_courseB", "Chemical_8_courseC", "Chemical_8_courseD", "Chemical_8_courseE"],
            "electives": ["Chemical_8_ElectiveA", "Chemical_8_ElectiveB", "Chemical_8_ElectiveC"]
        },
    },
     //Civil
     "Civil": {
        "3": {
            "fixed": ["Civil_3_courseA" , "Civil_3_courseB", "Civil_3_courseC", "Civil_3_courseD", "Civil_3_courseE"],
            "electives": ["Civil_3_ElectiveA", "Civil_3_ElectiveB", "Civil_3_ElectiveC"]
        },
        "4": {
            "fixed": ["Civil_4_courseA" , "Civil_4_courseB", "Civil_4_courseC", "Civil_4_courseD", "Civil_4_courseE"],
            "electives": ["Civil_4_ElectiveA", "Civil_4_ElectiveB", "Civil_4_ElectiveC"]
        },
        "5": {
            "fixed": ["Civil_5_courseA" , "Civil_5_courseB", "Civil_5_courseC", "Civil_5_courseD", "Civil_5_courseE"],
            "electives": ["Civil_5_ElectiveA", "Civil_5_ElectiveB", "Civil_5_ElectiveC"]
        },
        "6": {
            "fixed": ["Civil_6_courseA" , "Civil_6_courseB", "Civil_6_courseC", "Civil_6_courseD", "Civil_6_courseE"],
            "electives": ["Civil_6_ElectiveA", "Civil_6_ElectiveB", "Civil_6_ElectiveC"]
        },
        "7": {
            "fixed": ["Civil_7_courseA" , "Civil_7_courseB", "Civil_7_courseC", "Civil_7_courseD", "Civil_7_courseE"],
            "electives": ["Civil_7_ElectiveA", "Civil_7_ElectiveB", "Civil_7_ElectiveC"]
        },
        "8": {
            "fixed": ["Civil_8_courseA" , "Civil_8_courseB", "Civil_8_courseC", "Civil_8_courseD", "Civil_8_courseE"],
            "electives": ["Civil_8_ElectiveA", "Civil_8_ElectiveB", "Civil_8_ElectiveC"]
        },
    },
     //CSE
     "CSE": {
        "3": {
            "fixed": ["CSE_3_courseA" , "CSE_3_courseB", "CSE_3_courseC", "CSE_3_courseD", "CSE_3_courseE"],
            "electives": ["CSE_3_ElectiveA", "CSE_3_ElectiveB", "CSE_3_ElectiveC"]
        },
        "4": {
            "fixed": ["CSE_4_courseA" , "CSE_4_courseB", "CSE_4_courseC", "CSE_4_courseD", "CSE_4_courseE"],
            "electives": ["CSE_4_ElectiveA", "CSE_4_ElectiveB", "CSE_4_ElectiveC"]
        },
        "5": {
            "fixed": ["CSE_5_courseA" , "CSE_5_courseB", "CSE_5_courseC", "CSE_5_courseD", "CSE_5_courseE"],
            "electives": ["CSE_5_ElectiveA", "CSE_5_ElectiveB", "CSE_5_ElectiveC"]
        },
        "6": {
            "fixed": ["CSE_6_courseA" , "CSE_6_courseB", "CSE_6_courseC", "CSE_6_courseD", "CSE_6_courseE"],
            "electives": ["CSE_6_ElectiveA", "CSE_6_ElectiveB", "CSE_6_ElectiveC"]
        },
        "7": {
            "fixed": ["CSE_7_courseA" , "CSE_7_courseB", "CSE_7_courseC", "CSE_7_courseD", "CSE_7_courseE"],
            "electives": ["CSE_7_ElectiveA", "CSE_7_ElectiveB", "CSE_7_ElectiveC"]
        },
        "8": {
            "fixed": ["CSE_8_courseA" , "CSE_8_courseB", "CSE_8_courseC", "CSE_8_courseD", "CSE_8_courseE"],
            "electives": ["CSE_8_ElectiveA", "CSE_8_ElectiveB", "CSE_8_ElectiveC"]
        },
    },
     //CSBS
     "CSBS": {
        "3": {
            "fixed": ["CSBS_3_courseA" , "CSBS_3_courseB", "CSBS_3_courseC", "CSBS_3_courseD", "CSBS_3_courseE"],
            "electives": ["CSBS_3_ElectiveA", "CSBS_3_ElectiveB", "CSBS_3_ElectiveC"]
        },
        "4": {
            "fixed": ["CSBS_4_courseA" , "CSBS_4_courseB", "CSBS_4_courseC", "CSBS_4_courseD", "CSBS_4_courseE"],
            "electives": ["CSBS_4_ElectiveA", "CSBS_4_ElectiveB", "CSBS_4_ElectiveC"]
        },
        "5": {
            "fixed": ["CSBS_5_courseA" , "CSBS_5_courseB", "CSBS_5_courseC", "CSBS_5_courseD", "CSBS_5_courseE"],
            "electives": ["CSBS_5_ElectiveA", "CSBS_5_ElectiveB", "CSBS_5_ElectiveC"]
        },
        "6": {
            "fixed": ["CSBS_6_courseA" , "CSBS_6_courseB", "CSBS_6_courseC", "CSBS_6_courseD", "CSBS_6_courseE"],
            "electives": ["CSBS_6_ElectiveA", "CSBS_6_ElectiveB", "CSBS_6_ElectiveC"]
        },
        "7": {
            "fixed": ["CSBS_7_courseA" , "CSBS_7_courseB", "CSBS_7_courseC", "CSBS_7_courseD", "CSBS_7_courseE"],
            "electives": ["CSBS_7_ElectiveA", "CSBS_7_ElectiveB", "CSBS_7_ElectiveC"]
        },
        "8": {
            "fixed": ["CSBS_8_courseA" , "CSBS_8_courseB", "CSBS_8_courseC", "CSBS_8_courseD", "CSBS_8_courseE"],
            "electives": ["CSBS_8_ElectiveA", "CSBS_8_ElectiveB", "CSBS_8_ElectiveC"]
        },
    },
     //CSE_Cyber
     "CSE_Cyber": {
        "3": {
            "fixed": ["CSE_Cyber_3_courseA" , "CSE_Cyber_3_courseB", "CSE_Cyber_3_courseC", "CSE_Cyber_3_courseD", "CSE_Cyber_3_courseE"],
            "electives": ["CSE_Cyber_3_ElectiveA", "CSE_Cyber_3_ElectiveB", "CSE_Cyber_3_ElectiveC"]
        },
        "4": {
            "fixed": ["CSE_Cyber_4_courseA" , "CSE_Cyber_4_courseB", "CSE_Cyber_4_courseC", "CSE_Cyber_4_courseD", "CSE_Cyber_4_courseE"],
            "electives": ["CSE_Cyber_4_ElectiveA", "CSE_Cyber_4_ElectiveB", "CSE_Cyber_4_ElectiveC"]
        },
        "5": {
            "fixed": ["CSE_Cyber_5_courseA" , "CSE_Cyber_5_courseB", "CSE_Cyber_5_courseC", "CSE_Cyber_5_courseD", "CSE_Cyber_5_courseE"],
            "electives": ["CSE_Cyber_5_ElectiveA", "CSE_Cyber_5_ElectiveB", "CSE_Cyber_5_ElectiveC"]
        },
        "6": {
            "fixed": ["CSE_Cyber_6_courseA" , "CSE_Cyber_6_courseB", "CSE_Cyber_6_courseC", "CSE_Cyber_6_courseD", "CSE_Cyber_6_courseE"],
            "electives": ["CSE_Cyber_6_ElectiveA", "CSE_Cyber_6_ElectiveB", "CSE_Cyber_6_ElectiveC"]
        },
        "7": {
            "fixed": ["CSE_Cyber_7_courseA" , "CSE_Cyber_7_courseB", "CSE_Cyber_7_courseC", "CSE_Cyber_7_courseD", "CSE_Cyber_7_courseE"],
            "electives": ["CSE_Cyber_7_ElectiveA", "CSE_Cyber_7_ElectiveB", "CSE_Cyber_7_ElectiveC"]
        },
        "8": {
            "fixed": ["CSE_Cyber_8_courseA" , "CSE_Cyber_8_courseB", "CSE_Cyber_8_courseC", "CSE_Cyber_8_courseD", "CSE_Cyber_8_courseE"],
            "electives": ["CSE_Cyber_8_ElectiveA", "CSE_Cyber_8_ElectiveB", "CSE_Cyber_8_ElectiveC"]
        },
    },
     //CSE_DS
     "CSE_DS": {
        "3": {
            "fixed": ["CSE_DS_3_courseA" , "CSE_DS_3_courseB", "CSE_DS_3_courseC", "CSE_DS_3_courseD", "CSE_DS_3_courseE"],
            "electives": ["CSE_DS_3_ElectiveA", "CSE_DS_3_ElectiveB", "CSE_DS_3_ElectiveC"]
        },
        "4": {
            "fixed": ["CSE_DS_4_courseA" , "CSE_DS_4_courseB", "CSE_DS_4_courseC", "CSE_DS_4_courseD", "CSE_DS_4_courseE"],
            "electives": ["CSE_DS_4_ElectiveA", "CSE_DS_4_ElectiveB", "CSE_DS_4_ElectiveC"]
        },
        "5": {
            "fixed": ["CSE_DS_5_courseA" , "CSE_DS_5_courseB", "CSE_DS_5_courseC", "CSE_DS_5_courseD", "CSE_DS_5_courseE"],
            "electives": ["CSE_DS_5_ElectiveA", "CSE_DS_5_ElectiveB", "CSE_DS_5_ElectiveC"]
        },
        "6": {
            "fixed": ["CSE_DS_6_courseA" , "CSE_DS_6_courseB", "CSE_DS_6_courseC", "CSE_DS_6_courseD", "CSE_DS_6_courseE"],
            "electives": ["CSE_DS_6_ElectiveA", "CSE_DS_6_ElectiveB", "CSE_DS_6_ElectiveC"]
        },
        "7": {
            "fixed": ["CSE_DS_7_courseA" , "CSE_DS_7_courseB", "CSE_DS_7_courseC", "CSE_DS_7_courseD", "CSE_DS_7_courseE"],
            "electives": ["CSE_DS_7_ElectiveA", "CSE_DS_7_ElectiveB", "CSE_DS_7_ElectiveC"]
        },
        "8": {
            "fixed": ["CSE_DS_8_courseA" , "CSE_DS_8_courseB", "CSE_DS_8_courseC", "CSE_DS_8_courseD", "CSE_DS_8_courseE"],
            "electives": ["CSE_DS_8_ElectiveA", "CSE_DS_8_ElectiveB", "CSE_DS_8_ElectiveC"]
        },
    },
     //CS_Design
     "CS_Design": {
        "3": {
            "fixed": ["CS_Design_3_courseA" , "CS_Design_3_courseB", "CS_Design_3_courseC", "CS_Design_3_courseD", "CS_Design_3_courseE"],
            "electives": ["CS_Design_3_ElectiveA", "CS_Design_3_ElectiveB", "CS_Design_3_ElectiveC"]
        },
        "4": {
            "fixed": ["CS_Design_4_courseA" , "CS_Design_4_courseB", "CS_Design_4_courseC", "CS_Design_4_courseD", "CS_Design_4_courseE"],
            "electives": ["CS_Design_4_ElectiveA", "CS_Design_4_ElectiveB", "CS_Design_4_ElectiveC"]
        },
        "5": {
            "fixed": ["CS_Design_5_courseA" , "CS_Design_5_courseB", "CS_Design_5_courseC", "CS_Design_5_courseD", "CS_Design_5_courseE"],
            "electives": ["CS_Design_5_ElectiveA", "CS_Design_5_ElectiveB", "CS_Design_5_ElectiveC"]
        },
        "6": {
            "fixed": ["CS_Design_6_courseA" , "CS_Design_6_courseB", "CS_Design_6_courseC", "CS_Design_6_courseD", "CS_Design_6_courseE"],
            "electives": ["CS_Design_6_ElectiveA", "CS_Design_6_ElectiveB", "CS_Design_6_ElectiveC"]
        },
        "7": {
            "fixed": ["CS_Design_7_courseA" , "CS_Design_7_courseB", "CS_Design_7_courseC", "CS_Design_7_courseD", "CS_Design_7_courseE"],
            "electives": ["CS_Design_7_ElectiveA", "CS_Design_7_ElectiveB", "CS_Design_7_ElectiveC"]
        },
        "8": {
            "fixed": ["CS_Design_8_courseA" , "CS_Design_8_courseB", "CS_Design_8_courseC", "CS_Design_8_courseD", "CS_Design_8_courseE"],
            "electives": ["CS_Design_8_ElectiveA", "CS_Design_8_ElectiveB", "CS_Design_8_ElectiveC"]
        },
    },
     //EEE
     "EEE": {
        "3": {
            "fixed": ["EEE_3_courseA" , "EEE_3_courseB", "EEE_3_courseC", "EEE_3_courseD", "EEE_3_courseE"],
            "electives": ["EEE_3_ElectiveA", "EEE_3_ElectiveB", "EEE_3_ElectiveC"]
        },
        "4": {
            "fixed": ["EEE_4_courseA" , "EEE_4_courseB", "EEE_4_courseC", "EEE_4_courseD", "EEE_4_courseE"],
            "electives": ["EEE_4_ElectiveA", "EEE_4_ElectiveB", "EEE_4_ElectiveC"]
        },
        "5": {
            "fixed": ["EEE_5_courseA" , "EEE_5_courseB", "EEE_5_courseC", "EEE_5_courseD", "EEE_5_courseE"],
            "electives": ["EEE_5_ElectiveA", "EEE_5_ElectiveB", "EEE_5_ElectiveC"]
        },
        "6": {
            "fixed": ["EEE_6_courseA" , "EEE_6_courseB", "EEE_6_courseC", "EEE_6_courseD", "EEE_6_courseE"],
            "electives": ["EEE_6_ElectiveA", "EEE_6_ElectiveB", "EEE_6_ElectiveC"]
        },
        "7": {
            "fixed": ["EEE_7_courseA" , "EEE_7_courseB", "EEE_7_courseC", "EEE_7_courseD", "EEE_7_courseE"],
            "electives": ["EEE_7_ElectiveA", "EEE_7_ElectiveB", "EEE_7_ElectiveC"]
        },
        "8": {
            "fixed": ["EEE_8_courseA" , "EEE_8_courseB", "EEE_8_courseC", "EEE_8_courseD", "EEE_8_courseE"],
            "electives": ["EEE_8_ElectiveA", "EEE_8_ElectiveB", "EEE_8_ElectiveC"]
        },
    },
     //ECE
     "ECE": {
        "3": {
            "fixed": ["ECE_3_courseA" , "ECE_3_courseB", "ECE_3_courseC", "ECE_3_courseD", "ECE_3_courseE"],
            "electives": ["ECE_3_ElectiveA", "ECE_3_ElectiveB", "ECE_3_ElectiveC"]
        },
        "4": {
            "fixed": ["ECE_4_courseA" , "ECE_4_courseB", "ECE_4_courseC", "ECE_4_courseD", "ECE_4_courseE"],
            "electives": ["ECE_4_ElectiveA", "ECE_4_ElectiveB", "ECE_4_ElectiveC"]
        },
        "5": {
            "fixed": ["ECE_5_courseA" , "ECE_5_courseB", "ECE_5_courseC", "ECE_5_courseD", "ECE_5_courseE"],
            "electives": ["ECE_5_ElectiveA", "ECE_5_ElectiveB", "ECE_5_ElectiveC"]
        },
        "6": {
            "fixed": ["ECE_6_courseA" , "ECE_6_courseB", "ECE_6_courseC", "ECE_6_courseD", "ECE_6_courseE"],
            "electives": ["ECE_6_ElectiveA", "ECE_6_ElectiveB", "ECE_6_ElectiveC"]
        },
        "7": {
            "fixed": ["ECE_7_courseA" , "ECE_7_courseB", "ECE_7_courseC", "ECE_7_courseD", "ECE_7_courseE"],
            "electives": ["ECE_7_ElectiveA", "ECE_7_ElectiveB", "ECE_7_ElectiveC"]
        },
        "8": {
            "fixed": ["ECE_8_courseA" , "ECE_8_courseB", "ECE_8_courseC", "ECE_8_courseD", "ECE_8_courseE"],
            "electives": ["ECE_8_ElectiveA", "ECE_8_ElectiveB", "ECE_8_ElectiveC"]
        },
    },
     //ISE
     "ISE": {
        "3": {
            "fixed": ["ISE_3_courseA" , "ISE_3_courseB", "ISE_3_courseC", "ISE_3_courseD", "ISE_3_courseE"],
            "electives": ["ISE_3_ElectiveA", "ISE_3_ElectiveB", "ISE_3_ElectiveC"]
        },
        "4": {
            "fixed": ["ISE_4_courseA" , "ISE_4_courseB", "ISE_4_courseC", "ISE_4_courseD", "ISE_4_courseE"],
            "electives": ["ISE_4_ElectiveA", "ISE_4_ElectiveB", "ISE_4_ElectiveC"]
        },
        "5": {
            "fixed": ["ISE_5_courseA" , "ISE_5_courseB", "ISE_5_courseC", "ISE_5_courseD", "ISE_5_courseE"],
            "electives": ["ISE_5_ElectiveA", "ISE_5_ElectiveB", "ISE_5_ElectiveC"]
        },
        "6": {
            "fixed": ["ISE_6_courseA" , "ISE_6_courseB", "ISE_6_courseC", "ISE_6_courseD", "ISE_6_courseE"],
            "electives": ["ISE_6_ElectiveA", "ISE_6_ElectiveB", "ISE_6_ElectiveC"]
        },
        "7": {
            "fixed": ["ISE_7_courseA" , "ISE_7_courseB", "ISE_7_courseC", "ISE_7_courseD", "ISE_7_courseE"],
            "electives": ["ISE_7_ElectiveA", "ISE_7_ElectiveB", "ISE_7_ElectiveC"]
        },
        "8": {
            "fixed": ["ISE_8_courseA" , "ISE_8_courseB", "ISE_8_courseC", "ISE_8_courseD", "ISE_8_courseE"],
            "electives": ["ISE_8_ElectiveA", "ISE_8_ElectiveB", "ISE_8_ElectiveC"]
        },
    },
     //EIE
     "EIE": {
        "3": {
            "fixed": ["EIE_3_courseA" , "EIE_3_courseB", "EIE_3_courseC", "EIE_3_courseD", "EIE_3_courseE"],
            "electives": ["EIE_3_ElectiveA", "EIE_3_ElectiveB", "EIE_3_ElectiveC"]
        },
        "4": {
            "fixed": ["EIE_4_courseA" , "EIE_4_courseB", "EIE_4_courseC", "EIE_4_courseD", "EIE_4_courseE"],
            "electives": ["EIE_4_ElectiveA", "EIE_4_ElectiveB", "EIE_4_ElectiveC"]
        },
        "5": {
            "fixed": ["EIE_5_courseA" , "EIE_5_courseB", "EIE_5_courseC", "EIE_5_courseD", "EIE_5_courseE"],
            "electives": ["EIE_5_ElectiveA", "EIE_5_ElectiveB", "EIE_5_ElectiveC"]
        },
        "6": {
            "fixed": ["EIE_6_courseA" , "EIE_6_courseB", "EIE_6_courseC", "EIE_6_courseD", "EIE_6_courseE"],
            "electives": ["EIE_6_ElectiveA", "EIE_6_ElectiveB", "EIE_6_ElectiveC"]
        },
        "7": {
            "fixed": ["EIE_7_courseA" , "EIE_7_courseB", "EIE_7_courseC", "EIE_7_courseD", "EIE_7_courseE"],
            "electives": ["EIE_7_ElectiveA", "EIE_7_ElectiveB", "EIE_7_ElectiveC"]
        },
        "8": {
            "fixed": ["EIE_8_courseA" , "EIE_8_courseB", "EIE_8_courseC", "EIE_8_courseD", "EIE_8_courseE"],
            "electives": ["EIE_8_ElectiveA", "EIE_8_ElectiveB", "EIE_8_ElectiveC"]
        },
    },
     //Mechanical
     "Mechanical": {
        "3": {
            "fixed": ["Mechanical_3_courseA" , "Mechanical_3_courseB", "Mechanical_3_courseC", "Mechanical_3_courseD", "Mechanical_3_courseE"],
            "electives": ["Mechanical_3_ElectiveA", "Mechanical_3_ElectiveB", "Mechanical_3_ElectiveC"]
        },
        "4": {
            "fixed": ["Mechanical_4_courseA" , "Mechanical_4_courseB", "Mechanical_4_courseC", "Mechanical_4_courseD", "Mechanical_4_courseE"],
            "electives": ["Mechanical_4_ElectiveA", "Mechanical_4_ElectiveB", "Mechanical_4_ElectiveC"]
        },
        "5": {
            "fixed": ["Mechanical_5_courseA" , "Mechanical_5_courseB", "Mechanical_5_courseC", "Mechanical_5_courseD", "Mechanical_5_courseE"],
            "electives": ["Mechanical_5_ElectiveA", "Mechanical_5_ElectiveB", "Mechanical_5_ElectiveC"]
        },
        "6": {
            "fixed": ["Mechanical_6_courseA" , "Mechanical_6_courseB", "Mechanical_6_courseC", "Mechanical_6_courseD", "Mechanical_6_courseE"],
            "electives": ["Mechanical_6_ElectiveA", "Mechanical_6_ElectiveB", "Mechanical_6_ElectiveC"]
        },
        "7": {
            "fixed": ["Mechanical_7_courseA" , "Mechanical_7_courseB", "Mechanical_7_courseC", "Mechanical_7_courseD", "Mechanical_7_courseE"],
            "electives": ["Mechanical_7_ElectiveA", "Mechanical_7_ElectiveB", "Mechanical_7_ElectiveC"]
        },
        "8": {
            "fixed": ["Mechanical_8_courseA" , "Mechanical_8_courseB", "Mechanical_8_courseC", "Mechanical_8_courseD", "Mechanical_8_courseE"],
            "electives": ["Mechanical_8_ElectiveA", "Mechanical_8_ElectiveB", "Mechanical_8_ElectiveC"]
        },
    },
    
    // Add other branches here.
};

document.getElementById("semester").addEventListener("input", updateCourses);
document.getElementById("branches").addEventListener("change", updateCourses);

function updateCourses() {
    const semester = document.getElementById("semester").value;
    const branch = document.getElementById("branches").value;
    
    const fixedCourseList = document.getElementById("fixedCourseList");
    const electiveCourseSelect = document.getElementById("electiveCourse");

    fixedCourseList.innerHTML = ""; // Clear previous fixed course options
    electiveCourseSelect.innerHTML = ""; // Clear previous elective course options

    if (semester >= 1 && semester <= 2) {
        // If it's 1st or 2nd semester, display common courses for all branches
        const commonCourses = ["Mathematics - I", "Physics", "Chemistry", "Basic Electronics", "Programming in C"];
        const commonElectives = ["Environmental Science", "Humanities", "Engineering Graphics"];

        // Display common fixed courses
        commonCourses.forEach(course => {
            const listItem = document.createElement("li");
            listItem.textContent = course;
            fixedCourseList.appendChild(listItem);
        });

        // Display common electives
        commonElectives.forEach(elective => {
            const option = document.createElement("option");
            option.value = elective;
            option.textContent = elective;
            electiveCourseSelect.appendChild(option);
        });
    } 
    else if (courses[branch] && courses[branch][semester]) {
        // For 3rd semester and above, use the course list based on branch and semester
        const { fixed, electives } = courses[branch][semester];

        // Display fixed courses
        fixed.forEach(course => {
            const listItem = document.createElement("li");
            listItem.textContent = course;
            fixedCourseList.appendChild(listItem);
        });

        // Display elective courses
        electives.forEach(elective => {
            const option = document.createElement("option");
            option.value = elective;
            option.textContent = elective;
            electiveCourseSelect.appendChild(option);
        });
    }
}

// // Firebase configuration
// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyD8Om0rXG-Co6D--oCj7KGwkXI6oIz264k",
//     authDomain: "rehistrationform.firebaseapp.com",
//     projectId: "rehistrationform",
//     storageBucket: "rehistrationform.appspot.com",
//     messagingSenderId: "89597197829",
//     appId: "1:89597197829:web:76dc1e49fedd026d70a66c",
//     measurementId: "G-37S69C5ZE1"
//   };
  
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
  
//   // You can initialize analytics if needed, but it's optional
//   if (firebase.analytics) {
//     firebase.analytics();
//   }
  
//   // Initialize Firestore and Storage services
//   const db = firebase.firestore();
//   const storage = firebase.storage();
  

// // Form submission handling
// document.getElementById("courseRegistrationForm").addEventListener("submit", function(event) {
//     event.preventDefault();  // Prevent default form submission

//     // Retrieve form data
//     const branch = document.getElementById("branches").value;
//     const name = document.getElementById("name").value;
//     const usn = document.getElementById("usn").value;
//     const semester = document.getElementById("semester").value;
//     const contact = document.getElementById("contact").value;
//     const email = document.getElementById("email").value;
//     const address = document.getElementById("address").value;
//     const signatureFile = document.getElementById("signature").files[0];  // Get the uploaded file

//     // Collect all fixed courses into a string
//     const fixedCourses = Array.from(document.querySelectorAll("#fixedCourseList li"))
//                               .map(course => course.textContent)
//                               .join(", ");
    
//     const electiveCourse = document.getElementById("electiveCourse").value;

//     // Prepare the data to be saved in Firestore
//     const courseData = {
//         name: name,
//         usn: usn,
//         branch: branch,
//         semester: semester,
//         contact: contact,
//         email: email,
//         address: address,
//         fixedCourses: fixedCourses,
//         electiveCourse: electiveCourse
//     };

//     // Save the form data to Firestore
//     db.collection("registrations").add(courseData)
//     .then((docRef) => {
//         // Upload the signature file to Firebase Storage
//         const storageRef = storage.ref('signatures/' + name + '_signature.jpg');
//         return storageRef.put(signatureFile);
//     })
//     .then(() => {
//         alert("Form and signature submitted successfully!");
//     })
//     .catch((error) => {
//         alert("Error submitting form or uploading signature: " + error.message);
//     });
// });

document.getElementById("courseRegistrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Collect form data
    const formData = new FormData(this);

    // Send form data to IFTTT webhook
    fetch("https://maker.ifttt.com/trigger/student_registration/with/key/ciVEoRHczqfTyY1z6S25y1MDQriu5chG1fg8oyCMw9-", {
        method: "POST",
        body: formData // No need to JSON.stringify, just send as formData
    })
    .then(response => response.json())
    .then(data => console.log('Success:', data))
    .catch((error) => console.error('Error:', error));
});