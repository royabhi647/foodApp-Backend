const express = require('express');
const planRouter = express.Router();
const {protectRoute, isAuthorised} = require('../helper');
const {getAllPlans, getPlan, createPlan, updatePlan, deletePlan, top3Plans} = require('../controller/planController');

planRouter
    .route('/all')
    .get(getAllPlans);

planRouter
    .route('/top3')
    .get(top3Plans)

planRouter.use(protectRoute) // check user is loggedin or not
planRouter
    .route('single/:id')
    .get(getPlan)

planRouter.use(isAuthorised(['admin','restaurentowner'])) // loggedin and check role of user
planRouter
    .route('/crud')
    .post(createPlan)

planRouter
    .route('/crud/:id')
    .patch(updatePlan)
    .delete(deletePlan)




module.exports = planRouter;