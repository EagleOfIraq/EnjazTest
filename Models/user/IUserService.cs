using System.Collections.Generic;

namespace EnjazTest.Models.user
{
    public interface IUserService
    {
        User Authenticate(string username, string password);
        IEnumerable<User> GetAll();
    }
}