let subjects = {
    discretemathematics: {
        mathematicallogic: [],
        settheory: [],
        algebraicstructures: [],
        elementarycombinatorics: [],
        graphtheory: []
    },
    businesseconomicsandfinancialanalysis: {
        introductiontobusinessandeconomics: [],
        DemandAndSupplyAnalysis: [],
        ProductionCostMarketStructuresAndPricing: [],
        FinancialAccounting: [],
        FinancialRatiosAnalysis: []
    },
    operatingsystems: {
        OperatingSystemProcess: [],
        CPUSchedulingDeadlocks: [],
        ProcessManagementSynchronization: [],
        MemoryManagementVirtualMemory: [],
        FileSystemInterfaceOperations: []
      },
      databasemanagementsystems: {
        IntroductiontoDatabaseSystems: [],
        RelationalModelandSQL: [],
        SQLandSchemaRefinement: [],
        TransactionsandConcurrencyControl: [],
        DataStorageandIndexing: []
      },
      softwareengineering: {
        IntroductiontoSoftwareEngineering: [],
        SoftwareRequirements: [],
        DesignEngineering: [],
        TestingStrategies: [],
        RiskManagementandQualityManagement: []
      },
}
for (const key in subjects) {
    for (const topic in subjects[key]) {
        console.log(topic.toLowerCase());
    }
}