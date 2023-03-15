const dbconnect = require('../configs/dbconnect');
const responses = require('../configs/responses');

async function getAgents() {
  try {
    var agents = await dbconnect.agents();
    const result = await agents.find({}).toArray();
    return responses.successResponse(200, 'Agents', result);
  } catch (error) {
    return responses.errorResponse(400, 'Get Agents Error', error);
  }
}

async function getPropertyListingsByAgent(request) {
  try {
    var agents = await dbconnect.agents();
    const agentValidation = await agents
      .find({ _id: request.query.agent })
      .toArray();

    if (request.query.agent == null || agentValidation.length == 0) {
      return responses.errorResponse(404, 'Agent Not Found');
    }

    var properties = await dbconnect.properties();
    const result = await properties
      .find({ agent: request.query.agent })
      .toArray();
    return responses.successResponse(200, 'Listings', result);
  } catch (error) {
    console.log(error)
    return responses.errorResponse(400, 'Get Listings Error', error);
  }
}

async function getPropertyListingsByOrg(request) {
  try {
    var organisations = await dbconnect.organisations();
    const agentValidation = await organisations
      .find({ _id: request.query.organisation })
      .toArray();

    if (request.query.organisation == null || agentValidation.length == 0) {
      return responses.errorResponse(404, 'Organisation Not Found');
    }

    var properties = await dbconnect.properties()
    const result = await properties
      .find({ organisation: request.query.organisation })
      .toArray()
    return responses.successResponse(200, 'Listings', result)
  } catch (error) {
    console.log(error)
    return responses.errorResponse(400, 'Get Listings Error', error)
  }
}

module.exports = {
  getAgents,
  getPropertyListingsByAgent,
  getPropertyListingsByOrg,
}
