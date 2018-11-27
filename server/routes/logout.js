/*
# Copyright 2018 - Wipro Limited
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
*/

export default function (server) {

  const logout = function (request, reply) {
    /*
    Below line need to be utilized for clearing any session or cookie
    request.auth.session.clear();
    */
    console.log("session is cleared")
    return reply({ time: (new Date()).toISOString() });
  };

  server.route({
    path: '/api/logout',
    method: 'GET',
    config: { handler: logout }
  });


}
