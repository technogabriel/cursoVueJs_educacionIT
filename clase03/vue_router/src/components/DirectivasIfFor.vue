<template>
  <!-- <h3 class="my-4 text-info">directiva v-if</h3>

  <button class="btn-btn-danger my-3" @click="mostrar = !mostrar">
    {{ mostrar ? "ocultar" : "Mostrar" }}
  </button>
  <p v-if="mostrar" class="alert alert-warning">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque inventore
    voluptatibus ipsum placeat natus vel consectetur itaque. Rerum velit nulla
    earum. Temporibus hic culpa dolores, eveniet suscipit unde consequatur
    pariatur!
  </p>
  <p v-else class="alert alert-danger">Elemento Removido</p> -->

  <!---------------------V-show------------------------------------------------------------------>
  <!-- <h3 class="my-4 text-info">directiva v-show</h3>

  <button class="btn-btn-danger my-3" @click="cambiarMostrar()">
    {{ mostrar2 ? "ocultar" : "Mostrar" }}
  </button>
  <p v-show="getMostrar2()" class="alert alert-warning">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque inventore
    voluptatibus ipsum placeat natus vel consectetur itaque. Rerum velit nulla
    earum. Temporibus hic culpa dolores, eveniet suscipit unde consequatur
    pariatur!
  </p> -->

  <!-----------Propiedad reactiva array de tipo string ----------------------------------------------->
  <!-- <h3 class="my-4 text-info">directiva v-for</h3>
  <ul>
    <li v-for="(usuario, index) in usuarios" :key="index"> -->
      <!-- le da un indice unico a cada elemento que repite vue -->
      <!-- {{ index }} {{ usuario }}
    </li>
  </ul> -->

  <!-----------Propiedad reactiva array de tipo Objeto ----------------------------------------------->
  <!-- <ul>
    <li v-for="(alumno, index) in alumnos" :key="index"> -->
      <!-- <pre> {{alumno}} </pre> -->
      <!-- {{ index + 1 }} {{ alumno.nombre + " " + alumno.apellido }}
    </li>
  </ul> -->

  <button class="btn btn-warning my-3" @click="agregarAlumno()">
    Agregar alumno
  </button>
  
    <table class="table" v-if="alumnos.length">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Nombre</th>
          <th scope="col">Apellido</th>
          <th scope="col">Edad</th>
          <th scope="col">Curso</th>
          <th scope="col">Foto</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(alumno, index) in alumnos" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ alumno.nombre }}</td>
          <td>{{ alumno.apellido }}</td>
          <td>{{ alumno.edad }}</td>
          <td>{{ alumno.curso ? "si" : "no" }}</td>
          <td>
            <img
              :src="alumno.foto"
              :alt="alumno.nombre"
              height="100px"
              width="100px"
            />
          </td>
        </tr>
      </tbody>
    </table>
    <div v-else class="alert alert-info my-5">"No hay Alumnos"</div>

  <div
    class="media alert alert-danger"
    v-for="(alumno, index) in alumnos"
    :key="index"
  >
    <img :src="alumno.foto" :alt="alumno.nombre" width="100px" />
    <div class="media-body ms-3">
      <h5>ID: {{ index + 1 }}</h5>
      <p>Nombre: {{ alumno.nombre }}</p>
      <p>Edad: {{ alumno.edad }}</p>
      <div>
        Hizo el curso
        <input type="checkbox" v-model="alumno.curso" />
        <button class="btn btn-danger mx-3" @click="borrarAlumno(index)">
          Borrar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    // <-- option (permite crear propiedades reactivas)
    return {
      mostrar: false,
      mostrar2: false,
      usuarios: ["Carlos", "Maximiliano", "Nehuen", "Adan", "Antonella"],
      alumnos: [
        {
          nombre: "Carlos",
          apellido: "Chirinos",
          edad: 23,
          curso: true,
          foto: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-256.png",
        },
        {
          nombre: "Maximiliano",
          apellido: "Caprioglio",
          edad: 24,
          curso: false,
          foto: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/1_avatar-256.png",
        },
        {
          nombre: "Nehuen",
          apellido: "Bovyn",
          edad: 25,
          curso: true,
          foto: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/2_avatar-256.png",
        },
        {
          nombre: "Adan",
          apellido: "Tarazona",
          edad: 26,
          curso: false,
          foto: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-256.png",
        },
        {
          nombre: "Antonella",
          apellido: "Moderadora",
          edad: 27,
          curso: true,
          foto: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-256.png",
        },
      ],
    };
  },
  methods: {
    cambiarMostrar() {
      this.mostrar2 = !this.mostrar2;
    },
    getMostrar2() {
      return this.mostrar2;
    },

    borrarAlumno(index) {
      this.alumnos.splice(index, 1);
    },
    agregarAlumno() {
      const alumno = {
        nombre: "Maxi",
        apellido: "Lopez",
        edad: "22",
        curso: false,
        foto: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/12_avatar-64.png",
      };
      this.alumnos.push(alumno);
    },
  },
};
</script>

<style></style>
