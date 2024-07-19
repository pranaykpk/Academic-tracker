import mongoose from 'mongoose'

const progress = mongoose.Schema({
    username: String,
    subjects: {
        discretemathematics: {
            mathematicallogic: [],
            settheory: [],
            algebraicstructures: [],
            elementarycombinatorics: [],
            graphtheory: []
        },
        businesseconomicsandfinancialanalysis: {
            introductiontobusinessandeconomics: [],
            demandandsupplyanalysis: [],
            productioncostmarketstructuresandpricing: [],
            financialaccounting: [],
            financialratiosanalysis: []
        },
        operatingsystems: {
            operatingsystemandprocess: [],
            cpuschedulinganddeadlocks: [],
            processmanagementandsynchronizationandinterprocesscommunicationmechanisms: [],
            memorymanagementandvirtualmemory: [],
            filesysteminterfaceandoperations: []
          },
          databasemanagementsystems: {
            introductiontodatabasesystems: [],
            relationalmodelandsql: [],
            sqlandschemarefinement: [],
            transactionsandconcurrencycontrol: [],
            datastorageandindexing: []
          },
          softwareengineering: {
            introductiontosoftwareengineering: [],
            softwarerequirements: [],
            designengineering: [],
            testingstrategies: [],
            riskmanagementandqualitymanagement: []
          },
    }
})

export default mongoose.model("progress", progress)