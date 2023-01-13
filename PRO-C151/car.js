AFRAME.registerComponent("car-model", {
    schema: {
      modelRef: { type: "string", default: "../assets/car/scene.gltf" },
      clickCounter:{type:"float",default:0}
    },
    init: function() {
      // Hacer algo cuando el componente se adjunte por primera vez
      this.el.setAttribute("gltf-model", this.data.modelRef);
      const position = { x: 0, y: 50, z: 80 };
      const rotation = { x: 0, y: -100, z: 0 };
      this.el.setAttribute("position", position);
      this.el.setAttribute("rotation", rotation);
    },
    update: function() {
      window.addEventListener("click",e => {
        this.data.clickCounter = this.data.clickCounter + 1;
        if(this.data.clickCounter === 1){
          const rotation2 = {x: 0,y: -150,z: 0}
          this.el.setAttribute("rotation", rotation2)
        }
        else if(this.data.clickCounter === 2){
          const rotation2 = {x:0,y:-200,z:0}
          this.el.setAttribute("rotation", rotation2)
        }
        else if(this.data.clickCounter === 3){
          const rotation2 = {x:0,y:-250,z:-0}
          this.el.setAttribute("rotation", rotation2)
        }
        else if(this.data.clickCounter === 4){
          const rotation2 = {x:0,y:-300,z:0}
          this.el.setAttribute("rotation", rotation2)
        }
        else if(this.data.clickCounter === 5){
          const rotation2 = {x:0,y:-350,z:0}
          this.el.setAttribute("rotation", rotation2)
        }
        else if(this.data.clickCounter === 6){
          const rotation2 = {x:0,y:-400,z:0}
          this.el.setAttribute("rotation", rotation2)
        }
        else if(this.data.clickCounter === 7){
          const rotation2 = {x:0,y:-450,z:0}
          this.el.setAttribute("rotation", rotation2)
        }
        else if(this.data.clickCounter === 8){
          const rotation2 = {x:0,y:-500,z:0}
          this.el.setAttribute("rotation", rotation2)
          this.data.clickCounter = 0;
        }
        
        
      })
    }
  });
  