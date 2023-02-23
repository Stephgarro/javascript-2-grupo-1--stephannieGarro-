c
//convertir el clousure en una clase 

class EstudianteClase {
  constructor(nombre, apellidos, fechaNacimiento, id, nuevoIngreso, carrera, cursosMatriculados, cursosCursados) { 
    this.nombre = nombre
    this.apellidos = apellidos;
    this.fechaNacimiento = fechaNacimiento;
    this.id = id;
    this.nuevoIngreso = nuevoIngreso;
    this.carrera = carrera;
    this.cursosMatriculados = cursosMatriculados || [];
    this.cursosCursados = cursosCursados || [];
  }
  
  set setMatricular  (curso) {
    
    this.cursosMatriculados.push(curso)
  }
  
  get getMatricular () {
   return this.cursosMatriculados;
  }

  set setretirarMatricula  (curso) {
    const index = this.cursosMatriculados.indexOf(curso);
    if (index > -1) {
      this.cursosMatriculados.splice(index, 1);
    }
  }

  get getRetiramatricula (){
   return this.cursosMatriculados
  }

  set setAgregarnota(curso){
    const cursoObj = {curso:curso.curso, nota:curso.nota, estado:''}

    if (curso.nota >= 70) {
      cursoObj.estado = 'aprobado'
    } else{
      cursoObj.estado ='reprobado'
    }
    this.cursosCursados.push(cursoObj)
  }

  get getAgregarnota(){
    return this.cursosCursados
  }

 /*set setAgregarnota (curso ){
    const cursoObj = {curso:curso.curso , nota:curso.nota, estado:''};
  
    if(curso.nota >= 70) {
      cursoObj.estado = 'aprobado'
    } else {
      cursoObj.estado = 'reprobado'
    }
  
    this.cursosCursados.push(cursoObj)
  }
 
 get getAgregarnota() {
  return this.cursosCursados;
 }*/

}


const carlos = new EstudianteClase ('carlos', 'Mora', '1997-10-22', 'arq-0002', false, 'ciber seguridad ', ['Analisis datos II', 'Telecomunicaciones'], ['matematica logica', 'cloud computing'] )
carlos.setMatricular = 'seguridad II'
carlos.setretirarMatricula = 'Telecomunicaciones'
carlos.setAgregarnota = {curso:'Analisis datos II', nota:'34', estado:''}
console.log(carlos)

const Roberto = new EstudianteClase ('Roberto', 'martinez', '1997-10-25', '002', false, 'ing. sistemas', ['Analisis datos II', 'fundamentos de programacion'], null )
Roberto.setMatricular = 'javascript III'
Roberto.setretirarMatricula='fundamentos de programacion'
Roberto.setAgregarnota = {curso:'Analisis de datos II', nota:'88', estado:''}
console.log(Roberto)