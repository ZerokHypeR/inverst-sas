<template>

    <h1>crea de nuevo el home Zerok</h1>

      <!-- Sidebar -->
    <!-- <div class="sidebar close">
        <div class="logo">
            <i class="fab fa-trade-federation"></i>
            <span class="logo-name">Inverst S.A.S</span>
        </div>
        
        <ul class="nav-list">
            <li>
                <a href="#"> 
                    <i class="fab fa-microsoft"></i>
                    <span class="link-name">Dasbohard</span>
                </a>

                <ul class="sub-menu blank">
                    <li><a href="#" class="link-name">Dasbohard</a></li>
                </ul>

            </li>
            <li>
                <div class="icon-link">
                    <a href="">
                        <i class="fab fa-codepen"></i>
                        <span class="link-name">Acceso Rapido</span>
                    </a>
                    <i class="fas fa-caret-down arrow"></i>
                </div>
                <ul class="sub-menu">
                    <li><a href="#" class="link-name">Acceso Rapido</a></li>
                    <li><a href="#">Centralización de Información </a></li>
                    <li><a href="#">Seguimiento de Etapas </a></li>
                    <li><a href="#">Block Chain</a></li>
                </ul>

            </li>
            

            <li>
                <div class="icon-link">
                    <a href="">
                        <i class="fa-solid fa-circle-info"></i>
                        <span class="link-name">Informacion</span>
                    </a>
                    <i class="fas fa-caret-down arrow"></i>
                </div>
                <ul class="sub-menu">
                    <li><a href="#" class="link-name">Informacion</a></li>
                    <li><a href="#">Centralización de Información </a></li>
                    <li><a href="#">Seguimiento de Etapas </a></li>
                    <li><a href="#">Block Chain</a></li>
                </ul>
            </li>



            <li>
                <div class="icon-link">
                    <a href="">
                        <i class="fa-solid fa-folder"></i>
                        <span class="link-name">Documentos</span>
                    </a>
                    <i class="fas fa-caret-down arrow"></i>
                </div>
                <ul class="sub-menu">
                    <li><a href="#" class="link-name">Documentos</a></li>
                    <li><a href="#" >Contratos </a></li>
                    <li><a href="#">Datos Financieros</a></li>
                    <li><a href="#">Autos y Otros</a></li>
                </ul>
            </li>



            <li>
                <div class="icon-link">
                    <a href="">
                        <i class="fa-regular fa-person-walking"></i>
                        <span class="link-name">Seguimientos</span>
                    </a>
                    <i class="fas fa-caret-down arrow"></i>
                </div>
                <ul class="sub-menu">
                    <li><a href="#">Seguimiento de Etapas </a></li>
                </ul>
            </li>

            <li>
                <div class="icon-link">
                    <a href="">
                        <i class="fa-brands fa-rocketchat"></i>
                        <span class="link-name">Chat</span>
                    </a>

                    <ul class="sub-menu blank">
                        <li><a href="#" class="link-name">Chat</a></li> 
                    </ul>
    
                </div>
            </li>

            <li>
                <div class="icon-link">
                    <a href="">
                        <i class="fa-sharp fa-solid fa-share-nodes"></i>
                        <span class="link-name">Compartir</span>
                    </a>
                    <i class="fas fa-caret-down arrow"></i>


                    <ul class="sub-menu blank">
                        <li><a href="#" class="link-name">Compartir</a></li> 
                    </ul>
    
                </div>
                
            </li>

            <li>
                <div class="profile-details">
                    <div class="profile-content">
                        <img src="../assets/image/logo.png" alt="">
                    </div>

                    <div class="name-job">
                        <div class="name">Inverst S.A.S</div>
                        <div class="job">Web Inverst</div>
                    </div>
                    <i class="fas fa-right-to-bracket"></i>
                </div>
            </li>
        </ul>
    </div> -->

    <!-- Topbar -->
  

   <!-- Content -->

    <!-- <div class="home-section">
        <div class="home-content">
            <i class="fas fa-bars"></i>
            <span class="text">Dropdown Sidebar Menu</span>
        </div>
    </div> -->

    <!-- Archivo JS -->
    <!-- <script src="../assets/scripts/app.js"></script> -->
</template>


<script>
    export default {
        name: "UserHome",
    };
</script>


<style>

    /* .sidebar{
        position: fixed;
        top: 0;
        left: 0;
        height:100%;
        width: 260px;
        background-color: #11101d;
        z-index: 100;
        transition: all .5s ease;
    }

    .sidebar.close{
        width: 78px;
    }


    .sidebar .logo{
        height: 60px;
        display: flex;
        width: 100%;
        align-items: center;
    }

    .sidebar .logo i {
        font-size: 30px;
        color: #fff;
        height: 50px;
        min-width: 78px;
        text-align: center;
        line-height: 50px;
    }

    .sidebar .logo .logo-name{
        font-size: 22px;
        color: #fff;
        font-weight: 600;
        transition: all .3s ease;
        transition-delay: 1s;
    }


    .sidebar.close .logo .logo-name{
        opacity: 0;
        pointer-events: none;
        
    }

    .sidebar .nav-list{
        height: 100%;
        padding: 30px 0 150px 0;
        overflow: auto;
    }

    .sidebar.close .nav-list{
        overflow: visible;

    }

    .sidebar .nav-list::-webkit-scrollbar{
        display: none;
    }

    .sidebar .nav-list li{
        position: relative;
        list-style: none;
        transition: all .4s ease;
    }
    .sidebar .nav-list li:hover{
        background-color: #11101d;
    }



    .sidebar .nav-list li .icon-link{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .sidebar.close .nav-list li .icon-link{
        display: block;
    }

    .sidebar .nav-list li i{
        height: 50px;
        min-width: 78px;
        text-align: center;
        line-height: 50px;
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        transition: all .3s ease;
    }
    .sidebar.close .nav-list li i.arrow{
        display: none;
    }

    .sidebar .nav-list li.show i.arrow{
        transform: rotate(-180deg);
    }


    .sidebar .nav-list li a{
        display: flex;
        align-items: center;
        text-decoration: none;
    }

    .sidebar .nav-list li .link-name{
        color: #fff;
        font-size: 18px;
        font-weight: 400;
        transition: all .4s ease;
    }

    .sidebar.close .nav-list li .link-name{
        opacity: 0;
        pointer-events: none;
    }


    .sidebar .nav-list li .sub-menu{
        padding: 6px 6px 14px 80px;
        margin-top: -10px;
        background-color: #1b1b31;
        display: none;
        transition: all .3s ease;
    }

    .sidebar .nav-list li.show .sub-menu{
        display: block;
    }

    .sidebar.close .nav-list li .sub-menu{
        position: absolute;
        left: 100%;
        top: -10px;
        margin-top: 0;
        padding: 10px 20px;
        border-radius: 0 6px 6px  0;
        opacity: 0;
        display: block;
        pointer-events: none;
        transition: 0s;
    }

    .sidebar.close .nav-list li:hover .sub-menu{
        top: 0;
        opacity: 1;
        pointer-events: auto;
        transition: all .4s ease;
    }

    .sidebar .nav-list li .sub-menu a{
        color: #fff;
        font-size: 15px;
        padding: 5px 0;
        white-space: nowrap;
        opacity: .6;
        transition: all .3s ease;
    }


    .sidebar .nav-list li .sub-menu a:hover{
        opacity: 1;
    }
    .sidebar .nav-list li .sub-menu .link-name{
        display: none;
    }

    .sidebar.close .nav-list li .sub-menu .link-name{
        font-size: 18px;
        opacity: 1;
        display: block;
    }


    .sidebar .nav-list li .sub-menu.blank{
        padding: 3px 20px 6px 16px;
        opacity: 0;
        pointer-events: none;
    }

    .sidebar .nav-list li:hover .sub-menu.blank{
        top: 50px;
        transform: translateY(-50%);
    }


    .profile-details{
        position: fixed;
        bottom: 0;
        width: 260px;
        display: flex;
    align-items: center;
        justify-content: space-between;
        background-color: #1b1b31;
        padding: 12px 0;
        transition: all .5s ease;
    }


    .sidebar.close .profile-details{
        background-color: none;
        width: 78px ;
    }

    .profile-details .profile-content{
        display: flex;
        align-items: center;
    } 

    .profile-details .profile-content img{
        height: 51px;
        width: 51px;
        border-radius: 45px;
        object-fit: cover;
        margin: 0 14px 0 12px;
        background-color: #1d1b31;
        transition: all .5s ease;
    }


    .sidebar.close .profile-details .profile-content img{
        padding: 10px;
    }


    .profile-details .name-job .name,
    .profile-details .name-job .job{
        color: #fff;
        font-size: 18px;
        white-space: nowrap;
    }
    .sidebar.close .profile-details i,
    .sidebar.close .profile-details .name-job .name,
    .sidebar.close .profile-details .name-job .job{
        opacity: 0;
        pointer-events: none;

    }


    .profile-details .name-job .job{
        font-size: 12px ;
    }


    .home-section{
        position: relative;
        height: 100vh;
        width: calc(100% -260px);    
        left: 260px;
        background-color: #e4e9f7;
        transition: all .5s ease;
    }

    .sidebar.close ~ .home-section{
        left: 78px;
        width: calc(100% - 78px);

    }

    .home-section .home-content{
        display: flex;
        height: 60px;
        align-items: center;
    }


    .home-section .home-content i,
    .home-section .home-content .text{
        color: #11101d;
        font-size: 35px;
    }

    .home-section .home-content i{
        margin: 0 15px;
        cursor: pointer;
    }

    .home-section .home-content .text{
        white-space: nowrap;
        font-size: 20px;
        font-weight: 600;
    }   


    @media (max-width:400px ){
        .sidebar.close .nav-list li .sub-menu{
            display: none;
        }
    }


    .sidebar{
        width: 78px;
    }

    .sidebar.close{
        width: 0;
    }

    .home-section{
        left: 78px;
        width: calc(100% - 78px);
        z-index: 100;
    }


    .sidebar.close ~ .home-section {
        width: 100%;
        left: 0;
    } */

</style>