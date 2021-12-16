export function inspect() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args: any[]) {
      console.log(`---Método ${propertyKey}`);
      console.log(`------parâmetros: ${JSON.stringify(args)}`);
      const retorno = metodoOriginal.apply(this, args);
      console.log(`------retorno: ${JSON.stringify(retorno)}`);
      return retorno;
    };
    return descriptor;
  };
}

//Nessa estrutura como não temos nenhum parâmetro, pode-se criar sem o wrapper da primeira função e ao chamar o decorator não usa-se os ();
//decorator de método
