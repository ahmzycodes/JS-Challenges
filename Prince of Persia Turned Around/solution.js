function hitPrince(velocity, angle, height, distance) {
    const g = 9.81; // acceleration due to gravity on Earth's surface
    const angleRadians = angle * (Math.PI / 180); // convert angle to radians
    const V0 = velocity; // initial velocity
    const x = distance; // horizontal distance
    const h = height; // initial height
    //y = h + x * Math.tan(angleRadians) - (g * x * x) / (2 * V0 * V0 * Math.cos(angleRadians) * Math.cos(angleRadians));
        //range(Height involved)
    
    const range = V0*Math.cos(angleRadians)*((V0*Math.sin(angleRadians)+Math.sqrt(Math.pow(V0*Math.sin(angleRadians),2)+2*g*h))/g);  
    const tolerance = 0.5; // tolerance for hitting the prince

    return Math.abs(range - distance) <= tolerance;
  }