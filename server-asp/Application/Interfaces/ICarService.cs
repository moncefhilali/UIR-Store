
using Domain.Entities;

namespace Application.Interfaces
{
    public interface ICarService
    {
        Task<IEnumerable<Car>> GetCarsAsync();
        Task CreateCarAsync (Car car);
    }
}
