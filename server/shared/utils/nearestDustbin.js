const getNearestDustbin = (userLocation, dustbins) => {
    if (!dustbins || dustbins.length === 0) {
        return null;
    }

    let nearestDustbin = null;
    let shortestDistance = Infinity;

    dustbins.forEach(dustbin => {
        const distance = calculateDistance(userLocation, dustbin.location);
        if (distance < shortestDistance) {
            shortestDistance = distance;
            nearestDustbin = dustbin;
        }
    });

    return nearestDustbin;
};

const calculateDistance = (location1, location2) => {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = degreesToRadians(location2.latitude - location1.latitude);
    const dLon = degreesToRadians(location2.longitude - location1.longitude);
    const a = 
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(degreesToRadians(location1.latitude)) * Math.cos(degreesToRadians(location2.latitude)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in kilometers
};

const degreesToRadians = (degrees) => {
    return degrees * (Math.PI / 180);
};

module.exports = {
    getNearestDustbin
};