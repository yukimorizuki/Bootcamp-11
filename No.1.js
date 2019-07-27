function getBiodataSaya(){
    let biodata = {
        name: "Yukidiyo",
        age: 25,
          address: "Bukit Cimanggu City Blok A8/11",
          hobbies: ["Gaming", "Watching Anime"],
          is_married: false,
          list_school: [{name:"SD Bina Insani", year_in: 2001, year_out: 2007, major: null},
                      {name:"SMP Al-Ghazaly Bogor", year_in: 2007, year_out: 2010, major: null},
                      {name:"SMK Yadika 7 Bogor", year_in: 2010, year_out: 2013, major: "Teknik Multimedia"}],
        skills: [{skill_name: "C++", level: "beginner"},
                 {skill_name: "JavaScript", level: "beginner"},
                 {skill_name: "PHP", level: "beginner"},
                 {skill_name: "HTML", level: "advanced"},
                 {skill_name: "CSS", level: "advanced"}],
          interest_in_coding: true
    }
    
    let convertToJson = JSON.stringify(biodata)
    return convertToJson
    }
    
    console.log(getBiodataSaya())