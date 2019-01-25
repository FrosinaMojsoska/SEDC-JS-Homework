//Find all descendants for a given family member (recursive)

const familyTree = [{
    name: "Oliver",
    lastname: "Stones",
    childrens: [
        {
            name: "Viktor",
            lastname: "Stones",
            childrens: []
        },
        {
            name: "Suzan",
            lastname: "Sloun",
            childrens: [
                {
                    name: "Oliver jr",
                    lastname: "Sloun",
                    childrens: [
                        {
                            name: "Alexandar",
                            lastname: "Sloun",
                            childrens: [
                                {
                                    name: "Suzie",
                                    lastname: "Sloun",
                                    childrens: []
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Alex",
                    lastname: "Sloun",
                    childrens: [
                        {
                            name: "Gabriel",
                            lastname: "Sloun",
                            childrens: [
                                {
                                    name: "Gabriela",
                                    lastname: "Sloun",
                                    childrens: []
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}];



let result = [];
function nooo(familyTree) {

    
    familyTree.forEach(element => {
        //console.log(element)
        if (element.childrens) {
            result.push(element.name)
            nooo(element.childrens)


        }
    
    });

    
    return result.slice(1,result.length)
}

console.log(`${familyTree[0].name}'s descendants are ${nooo(familyTree)}`)


