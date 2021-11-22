<template>
    <div class="container-xxl">
        <div class="row">
            <div class="col-12 text-start p-2">
                <img class="mb-3" src="@/assets/plus.svg">
                <span class="h2">Personalize seu comércio</span>
                <hr/>
            </div>
        </div>
        <div class="list-group list-group-horizontal" style="max-height:640px; overflow-x:scroll; overflow-y:hidden">
            <button class="list-group-item bg-danger bg-gradient col-3 btn card mx-4 p-0" style="min-width:280px;">    
                <img src="@/assets/acervoTemplate/Restaurant.svg" class="card-img-top  mt-2 h-25" alt="...">
                <hr/>
                <div class="card-body">
                    <h5 class="card-title text-white">Restaurante</h5>
                    <p class="card-text text-white">Este template é dedicado para estabelecimentos que necessitam de uma gestão mais dinâmica, implementando uma supervisão em tempo real das comandas, caixa e tempo médio da entrega dos pratos, ideal para um comércio em expansão! </p>
                    
                </div>
            </button>
            <button class="list-group-item bg-dark bg-gradient col-3 btn card mx-4 p-0" style="min-width:280px;"> 
                <img src="@/assets/acervoTemplate/GenericShop.svg" class="card-img-top  mt-2 h-25" alt="...">
                <hr/>
                <div class="card-body">
                    <h5 class="card-title text-white">Restaurante</h5>
                    <p class="card-text text-white">Este template é dedicado para estabelecimentos que necessitam de uma gestão mais dinâmica, implementando uma supervisão em tempo real das comandas, caixa e tempo médio da entrega dos pratos, ideal para um comércio em expansão! </p>
                    
                </div>
            </button>
            <button class="list-group-item bg-danger bg-gradient col-3 btn card mx-4 p-0" style="min-width:280px;">    
                <img src="@/assets/acervoTemplate/Restaurant.svg" class="card-img-top  mt-2 h-25" alt="...">
                <hr/>
                <div class="card-body">
                    <h5 class="card-title text-white">Restaurante</h5>
                    <p class="card-text text-white">Este template é dedicado para estabelecimentos que necessitam de uma gestão mais dinâmica, implementando uma supervisão em tempo real das comandas, caixa e tempo médio da entrega dos pratos, ideal para um comércio em expansão! </p>
                    
                </div>
            </button>
            <button class="list-group-item bg-dark bg-gradient col-3 btn card mx-4 p-0" style="min-width:280px;"> 
                <img src="@/assets/acervoTemplate/GenericShop.svg" class="card-img-top  mt-2 h-25" alt="...">
                <hr/>
                <div class="card-body">
                    <h5 class="card-title text-white">Restaurante</h5>
                    <p class="card-text text-white">Este template é dedicado para estabelecimentos que necessitam de uma gestão mais dinâmica, implementando uma supervisão em tempo real das comandas, caixa e tempo médio da entrega dos pratos, ideal para um comércio em expansão! </p>
                    
                </div>
            </button>
            
            
            
        </div>
        <div class="row">
            <div class="col-12 text-start p-2">
                <img class="mb-3" src="@/assets/plus.svg">
                <span class="h2">Crie Seu Comércio</span>
                <hr/>
            </div>
        </div>
        <div class="list-group list-group-horizontal" style="max-height:640px; overflow-x:scroll; overflow-y:hidden">
            <button class="list-group-item bg-danger bg-gradient col-3 btn card mx-4 p-0" style="min-width:280px;">    
                <img src="@/assets/acervoTemplate/Restaurant.svg" class="card-img-top  mt-2 h-25" alt="...">
                <hr/>
                <div class="card-body">
                    <h5 class="card-title text-white">Restaurante</h5>
                    <p class="card-text text-white">Este template é dedicado para estabelecimentos que necessitam de uma gestão mais dinâmica, implementando uma supervisão em tempo real das comandas, caixa e tempo médio da entrega dos pratos, ideal para um comércio em expansão! </p>
                    
                </div>
            </button>
            <button class="list-group-item bg-dark bg-gradient col-3 btn card mx-4 p-0" style="min-width:280px;"> 
                <img src="@/assets/acervoTemplate/GenericShop.svg" class="card-img-top  mt-2 h-25" alt="...">
                <hr/>
                <div class="card-body">
                    <h5 class="card-title text-white">Restaurante</h5>
                    <p class="card-text text-white">Este template é dedicado para estabelecimentos que necessitam de uma gestão mais dinâmica, implementando uma supervisão em tempo real das comandas, caixa e tempo médio da entrega dos pratos, ideal para um comércio em expansão! </p>
                    
                </div>
            </button>
            <button class="list-group-item bg-danger bg-gradient col-3 btn card mx-4 p-0" style="min-width:280px;">    
                <img src="@/assets/acervoTemplate/Restaurant.svg" class="card-img-top  mt-2 h-25" alt="...">
                <hr/>
                <div class="card-body">
                    <h5 class="card-title text-white">Restaurante</h5>
                    <p class="card-text text-white">Este template é dedicado para estabelecimentos que necessitam de uma gestão mais dinâmica, implementando uma supervisão em tempo real das comandas, caixa e tempo médio da entrega dos pratos, ideal para um comércio em expansão! </p>
                    
                </div>
            </button>
            <button class="list-group-item bg-dark bg-gradient col-3 btn card mx-4 p-0" style="min-width:280px;"> 
                <img src="@/assets/acervoTemplate/GenericShop.svg" class="card-img-top  mt-2 h-25" alt="...">
                <hr/>
                <div class="card-body">
                    <h5 class="card-title text-white">Restaurante</h5>
                    <p class="card-text text-white">Este template é dedicado para estabelecimentos que necessitam de uma gestão mais dinâmica, implementando uma supervisão em tempo real das comandas, caixa e tempo médio da entrega dos pratos, ideal para um comércio em expansão! </p>
                    
                </div>
            </button>
            
            
            
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {

    name:'Dashboard',
    setup() {
       const Templates = ref(["sd","sd","sd","sd","sd","sd",])
       return{
           Templates,
       }
     },   
}
</script>
