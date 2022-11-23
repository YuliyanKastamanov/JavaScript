class Triathlon {


    constructor(competitionName) {

        this.competitionName = competitionName;
        this.participants = {};
        this.listOfFinalists = [];
    }


    addParticipant(participantName, participantGender) {


        if (Object.keys(this.participants).includes(participantName)) {
            return `${participantName} has already been added to the list`
        }


        this.participants[participantName] = { participantName, participantGender };
        //this.participants[participantName] = participantGender;

        return `A new participant has been added - ${participantName}`


    }

    completeness(participantName, condition) {

        let currentParticipant = this.participants[participantName]



        if (!Object.keys(this.participants).includes(participantName)) {


            throw new Error(`${participantName} is not in the current participants list`)
        }


        let completedCount = (condition / 30).toFixed(0);




        if (condition < 30) {
            throw new Error(`${participantName} is not well prepared and cannot finish any discipline`)
        }

        if (Number(completedCount) == 1 || Number(completedCount) == 2) {

            return `${participantName} could only complete ${completedCount} of the disciplines`


        }

        delete this.participants[participantName]

        this.listOfFinalists.push(currentParticipant)

        return `Congratulations, ${participantName} finished the whole competition`




    }

    rewarding(participantName) {

        let isInTheArr = false;

        for (const currentParticipant of this.listOfFinalists) {

            if (currentParticipant.participantName === participantName) {

                isInTheArr = true;
            }

        }


        if (isInTheArr) {

            return `${participantName} was rewarded with a trophy for his performance`

        } else {
            return `${participantName} is not in the current finalists list`

        }
    }

    showRecord(criteria) {

        if (this.listOfFinalists.length === 0) {

            return `There are no finalists in this competition`
        }

        let result = [];

        if (criteria === 'all'){

            result.push(`List of all ${this.competitionName} finalists:`)

            for (const partic of this.listOfFinalists) {
                result.push(`${partic.participantName}`)

            }

            return result.join('\n')

        }




        for (const currentParticipant of this.listOfFinalists) {

            if (currentParticipant.participantGender === 'male') {
                return `${currentParticipant.participantName} is the first ${criteria} that finished the ${this.competitionName} triathlon`;

            } else if (currentParticipant.participantGender === 'female') {

                return `${currentParticipant.participantName} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
            }


        }

        
        return `There are no ${gender}'s that finished the competition`

        



    }




}

const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.addParticipant("George", "male"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 90));
console.log(contest.completeness("George", 95));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.rewarding("George"));
console.log(contest.showRecord("male"));

