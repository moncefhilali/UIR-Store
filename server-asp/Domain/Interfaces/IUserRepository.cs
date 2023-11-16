using Domain.Entities;

namespace Domain.Interfaces
{
    public interface IGenericRepository<T> where T : class
    {
        Task<IEnumerable<T>> GetUsersAsync();
        Task CreateUserAsync(T t);
    }
}
